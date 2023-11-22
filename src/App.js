import { Bodies, Body, Engine, Events, Render, Runner, World } from "matter-js";
import { FRUITS_BASE } from "./fruits";
import { useEffect, useMemo, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "./store";

const App = () => {
  const gameInfoStore = useStore("gameInfoStore");
  const {addScore, initScore} = gameInfoStore;
  const step = 0.5;
  const [speed, setSpeed] = useState(2);
  const canvasRef = useRef(null);
  const bestScore = useRef(0);
  const gameCount = useRef(0);
  let FRUITS = FRUITS_BASE;

  // let THEME = "base"; // { base, halloween }
  // switch (THEME) {
  //   case "halloween":
  //     FRUITS = FRUITS_HLW;
  //     break;
  //   default:
  //     FRUITS = FRUITS_BASE;
  // }
  
  const distance = useMemo(() => {
    console.log("useMemo");
    return step * speed;
  }, [speed])

  const gameOver = () => {
    alert("game Over");

    ++gameCount.current;

    if (bestScore.current < gameInfoStore.score) {
      bestScore.current = gameInfoStore.score;
    }

    initScore()
  }

  useEffect(() => {
    const engine = Engine.create();
    const render = Render.create({
      engine,
      canvas: canvasRef.current,
      element: document.body,
      options: {
        wireframes: false,
        background: "#F7F4C8",
        width: 620,
        height: 850,
      }
    });

    const world = engine.world;

    const leftWall = Bodies.rectangle(15, 395, 30, 790, {
      isStatic: true,
      render: { fillStyle: "#E6B143" }
    });

    const rightWall = Bodies.rectangle(605, 395, 30, 790, {
      isStatic: true,
      render: { fillStyle: "#E6B143" }
    });

    const ground = Bodies.rectangle(310, 820, 620, 60, {
      isStatic: true,
      render: { fillStyle: "#E6B143" }
    });

    const topLine = Bodies.rectangle(310, 150, 620, 2, {
      name: "topLine",
      isStatic: true,
      isSensor: true,
      render: { fillStyle: "#E6B143" }
    })

    World.add(world, [leftWall, rightWall, ground, topLine]);

    Render.run(render);
    Runner.run(engine);

    let currentBody = null;
    let currentFruit = null;
    let disableAction = false;
    let interval = null;

    function addFruit() {
      const index = Math.floor(Math.random() * 5);
      const fruit = FRUITS[index];

      const body = Bodies.circle(300, 50, fruit.radius, {
        index: index,
        isSleeping: true,
        render: {
          sprite: { texture: `${fruit.name}.png` }
        },
        restitution: 0.2,
      });

      currentBody = body;
      currentFruit = fruit;

      World.add(world, body);
    }

    window.onkeydown = (event) => {
      if (disableAction) {
        return;
      }

      console.log("AA", distance);
      switch (event.code) {
        case "KeyA":
          if (interval)
            return;

          interval = setInterval(() => {
            if (currentBody.position.x - currentFruit.radius > 30)
              Body.setPosition(currentBody, {
                x: currentBody.position.x - distance,
                y: currentBody.position.y,
              });
          }, 5);
          break;

        case "KeyD":
          if (interval)
            return;

          interval = setInterval(() => {
            if (currentBody.position.x + currentFruit.radius < 590)
            Body.setPosition(currentBody, {
              x: currentBody.position.x + distance,
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

          addScore(FRUITS[index].score * 2);
          console.log("ADD Score");

          // return 하면 for문 2번 실행 됨
          if (index === FRUITS.length - 1) {
            return;
          }

          World.remove(world, [collision.bodyA, collision.bodyB]);

          const newFruit = FRUITS[index + 1];

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
  }, [gameCount])

  return (
    <>
      <h3>Score: {gameInfoStore.score}</h3>
      <h3>BestScore: {bestScore.current}</h3>
      <span>Speed: {speed} </span>
      <button onClick={() => {setSpeed(prev => ++prev)}}>speed Up</button>
      <button onClick={() => {setSpeed(prev => --prev)}}>speed Down</button>
    </>
  )
}

export default observer(App);