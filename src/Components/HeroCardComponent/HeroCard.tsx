import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Agility from '../../images/hero_agility.png'
import Strength from '../../images/hero_strength.png'
import Intelligence from '../../images/hero_intelligence.png'


interface IHeroState {
    primaryAttr: string;
    heroName: string;
    heroImage: string;
    HP: number;
    MP: number;
    healthRegen: number;
    manaRegen: number;
    strength: number;
    agility: number;
    intelligence: number;
}

const useStyles = makeStyles({
    hHP: {
        fontSize: 20,
        background: "linear-gradient(45deg, #3cb00d 30%, #1ae66c 90%)",
        color: 'white',
        textShadow: "1px 1px 2px black"
    },
    hMP: {
        fontSize: 20,
        background: "linear-gradient(45deg, #202fcd 30%, #7088e7 90%)",
        color: 'white',
        textShadow: "1px 1px 2px black"
    },
    cardcont: {
        padding: 0,
    },
    avatar: {
        display: "inline-flex",
        verticalAlign: "middle",
        alignItems: "center"
    }
})

function HeroCard(props: IHeroState) {

    const classes = useStyles();

    let mainStat: string = '';

    function heroMainStat(s: string) {
        switch (s) {
            case 'agi':
                mainStat = 'Agility';
                return <Avatar alt="Agility" src={Agility} />;
            case 'str':
                mainStat = 'Strength';
                return <Avatar alt="Strength" src={Strength} />;
            case 'int':
                mainStat = 'Intelligence';
                return <Avatar alt="Intelligence" src={Intelligence} />;
            default:
                return <Avatar alt="Agility" src={Agility} />;
        }
    }

    return (
        <div>
            <Card className="HeroCardContainer">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={"https://api.opendota.com" + props.heroImage}
                        title={props.heroName + " Image"}
                    />
                    <CardContent className={classes.cardcont}>
                        <div className={classes.avatar}>
                            {heroMainStat(props.primaryAttr)}
                            <Typography >
                                {mainStat}
                            </Typography>
                        </div>

                        <Typography>
                            Hero Name: {props.heroName}
                        </Typography>
                        <Typography className={classes.hHP}>
                            HP: {(20 * props.strength) + props.HP} +{((0.1 * props.strength) + props.healthRegen).toFixed(2)}
                        </Typography>
                        <Typography className={classes.hMP}>
                            MP: {(12 * props.intelligence) + props.MP} +{((0.05 * props.intelligence) + props.manaRegen).toFixed(2)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>


        </div>
    )
}

export default HeroCard