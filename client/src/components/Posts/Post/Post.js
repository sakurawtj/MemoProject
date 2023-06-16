import useStyles from './styles';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useDispatch } from 'react-redux';
import {deletePost, favoratePost} from "../../../actions/posts";
import moment from 'moment'
const Post = ({post, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><ModeEditIcon fontSize="default" />Edit</Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
            <CardContent>
                <Typography className={classes.description} variant="body2" color="textSecondary" component="p">{post.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(favoratePost(post._id))}>Favorate {post.favorate ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize='small' /> }</Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>
        </Card>
    );
};

export default Post;