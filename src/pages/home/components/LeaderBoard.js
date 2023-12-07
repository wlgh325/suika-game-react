import {observer} from "mobx-react-lite";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import _ from "lodash";
import {useStore} from "../../../store";
import {Paper} from "../../../components";

const LeaderBoard = () => {
    const {sortedScoreList} = useStore("scoreStore");
    const columns = [
        {id: "rank", label: "순위", minWidth: 10},
        {id: "score", label: "점수", minWidth: 200},
    ]

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 250 }}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={2}>오늘의 득점 순위</TableCell>
                    </TableRow>
                    <TableRow>
                        {_.map(columns, (column, index) => (
                                <TableCell
                                    key={column.id}
                                    style={{top: 57, minWidth: column.minWidth}}
                                    align="center"
                                >
                                    {column.label}
                                </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        sortedScoreList.map((score, index) => {
                            return (
                                <TableRow hover tabIndex={-1} key={index+1}>
                                    <TableCell key="rank" align="center">{index+1}</TableCell>
                                    <TableCell key="score" align="center">{score === 0 ? "" : score}</TableCell>
                                </TableRow>
                        )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default observer(LeaderBoard);