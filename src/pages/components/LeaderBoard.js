import {observer} from "mobx-react-lite";
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import _ from "lodash";
import {useStore} from "../../store";

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
                        <TableCell align="center" colSpan={2}>오늘듸 득점 순위</TableCell>
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
                    {/*{_.map(scoreList, (score, index) => (*/}
                    {/*    <TableRow hover tabIndex={-1} key={index}>*/}
                    {/*        {_.map(columns, (column, index) => (*/}
                    {/*            <TableCell key={column.id} align="center">{score}</TableCell>*/}
                    {/*        ))}*/}
                    {/*    </TableRow>*/}
                    {/*))}*/}
                    <TableRow hover tabIndex={-1} key={1}>
                        <TableCell key="rank" align="center">1</TableCell>
                        <TableCell key="score" align="center">{_.at(sortedScoreList, 0)}</TableCell>
                    </TableRow>
                    <TableRow hover tabIndex={-1} key={2}>
                        <TableCell key="rank" align="center">2</TableCell>
                        <TableCell key="score" align="center">{_.at(sortedScoreList, 1)}</TableCell>
                    </TableRow>
                    <TableRow hover tabIndex={-1} key={3}>
                        <TableCell key="rank" align="center">3</TableCell>
                        <TableCell key="score" align="center">{_.at(sortedScoreList, 2)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default observer(LeaderBoard);