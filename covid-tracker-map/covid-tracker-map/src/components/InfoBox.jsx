import React from "react";
import { Card, CardContent, Typography } from '@mui/material';


const InfoBox = ({ title, cases, total}) => {
    return (
        <Card className="infoBox">
            <CardContent>
                <Typography
                    className="infoBox__title"
                    color="textSecondary"
                    >
                    {title}
                </Typography>
                <h2 className="inforBox__cases">{cases}</h2>
                <Typography
                    className="infoBox__total"
                    color="textSecondary"
                    >
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox