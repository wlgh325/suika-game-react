import {Body, Bodies, Engine, Events, Render, Runner, World} from "matter-js"
import {observer} from "mobx-react-lite"
import {useEffect, useRef, useMemo} from "react"
import {useStore} from "../../../store";

const Game = () => {
    const gameInfoStore = useStore("gameInfoStore");
    const {addScore, initScore, updateScoreList } = useStore("scoreStore")
    const {gravityY, gameCount, increaseGameCount, setFruitIndex} = gameInfoStore;
    const canvasRef = useRef(null);

    const gameOver = () => {
        alert("game Over");

        increaseGameCount();
        updateScoreList();
    }

    const fruits = useMemo(() => gameInfoStore.fruits, [gameInfoStore.fruits]);
    useEffect(() => {
        initScore();
        const engine = Engine.create();
        const render = Render.create({
        engine,
        canvas: canvasRef.current,
        options: {
            wireframes: false,
            background: "#F7F4C8",
            width: 570,
            height: 800,
        }
        });

        engine.gravity.y = gravityY;
        const world = engine.world;

        const leftWall = Bodies.rectangle(15, 370, 30, 740, {
            isStatic: true,
            render: { fillStyle: "#d0d06e" }
        });

        const rightWall = Bodies.rectangle(555, 370, 30, 740, {
            isStatic: true,
            render: { fillStyle: "#d0d06e" }
        });

        const ground = Bodies.rectangle(285, 770, 570, 60, {
            isStatic: true,
            render: { fillStyle: "#d0d06e" }
        });

        const topLine = Bodies.rectangle(285, 150, 570, 2, {
            name: "topLine",
            isStatic: true,
            isSensor: true,
            render: { fillStyle: "#d0d06e" }
        })

        World.add(world, [leftWall, rightWall, ground, topLine]);

        Render.run(render);
        Runner.run(engine);

        let currentBody = null;
        let currentFruit = null;
        let disableAction = false;
        let interval = null;

        function addFruit() {
            setFruitIndex();
            const fruit = fruits[gameInfoStore.currentFruitIndex];
            const body = Bodies.circle(300, 50, fruit.radius, {
                index: gameInfoStore.currentFruitIndex,
                isSleeping: true,
                render: {
                sprite: { texture: `${fruit.name}.png` }
                },
                restitution: 0.2,
            });

            currentFruit = fruit;
            currentBody = body;
            World.add(world, body);
        }

        window.onkeydown = (event) => {
        if (disableAction) {
            return;
        }

        switch (event.code) {
            case "KeyA":
            if (interval)
                return;

            interval = setInterval(() => {
                if (currentBody.position.x - currentFruit.radius > 30)
                Body.setPosition(currentBody, {
                    x: currentBody.position.x - gameInfoStore.distance,
                    y: currentBody.position.y,
                });
            }, 5);
            break;

            case "KeyD":
            if (interval)
                return;

            interval = setInterval(() => {
                if (currentBody.position.x + currentFruit.radius < 540)
                Body.setPosition(currentBody, {
                x: currentBody.position.x + gameInfoStore.distance,
                y: currentBody.position.y,
                });
            }, 5);
            break;

            case "KeyS":
            currentBody.isSleeping = false;
            disableAction = true;

            setTimeout(() => {
                addFruit();
                disableAction = false;
            }, 1000);
            break;

            default:
            break;
        }
        }

        window.onkeyup = (event) => {
        switch (event.code) {
            case "KeyA":
            case "KeyD":
            clearInterval(interval);
            interval = null;
            break;
            default:
            break;
        }
        }

        Events.on(engine, "collisionStart", (event) => {
        event.pairs.forEach((collision) => {
            if (collision.bodyA.index === collision.bodyB.index) {
            const index = collision.bodyA.index;

            addScore(fruits[index].score * 2);

            if (index === 1) {
                gameOver();
            }
            if (index === fruits.length - 1) {
                return;
            }

            World.remove(world, [collision.bodyA, collision.bodyB]);

            const newFruit = fruits[index + 1];

            const newBody = Bodies.circle(
                collision.collision.supports[0].x,
                collision.collision.supports[0].y,
                newFruit.radius,
                {
                render: {
                    sprite: { texture: `${newFruit.name}.png` }
                },
                index: index + 1,
                }
            );

            World.add(world, newBody);
            }

            if (!disableAction &&
            (collision.bodyA.name === "topLine" || collision.bodyB.name === "topLine")) {
            gameOver()
            }
        });
        });

        addFruit();
    }, [gameCount, fruits])

    return (
        <canvas ref={canvasRef}/>
    )
}

export default observer(Game);