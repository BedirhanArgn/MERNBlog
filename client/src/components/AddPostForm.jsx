import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { DialogContentText, makeStyles } from "@material-ui/core";
import { Button, TextField, Select, Input, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form"
import { createPost } from "../actions/post";
import FileBase64 from "react-file-base64";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2)
    },
    textField: {
        marginBottom: theme.spacing(2)
    }
}))
const tags = ['fun', 'programming', 'health', 'science'];
const postSchema = yup.object().shape({
    title: yup.string().required(),
    subtitle: yup.string().required(),
    content: yup.string().min(30).required(),
    tag: yup.mixed().oneOf(tags)
})

const AddPostForm = ({ open, handleClose }) => {
    const dispatch = useDispatch();
    const [file, setFile] = useState(null);
    const tags = ['fun', 'programming', 'health', "science"]

    const onSubmit = (data) => {
        dispatch(createPost({ ...data, image: file }));
        clearForm();
    }
    const clearForm = () => {
        reset();
        setFile(null);
        handleClose();
    }

    const { register, handleSubmit, control, errors, reset } = useForm({
        resolver: yupResolver(postSchema)
    });
    const classes = useStyles();

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Yeni Yazı Oluştur</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Yeni Bir Yazı Eklemek için Asağıdaki Formu Doldurun
                    </DialogContentText>
                <div className={classes.root}>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
                        <TextField

                            id="title"
                            name="title"
                            variant="outlined"
                            className={classes.textField}
                            size="small"
                            label="Başlık"
                            fullWidth={true}
                            inputRef={register}
                            error={errors.title ? true : false}
                        ></TextField>
                        <TextField
                            id="subtitle"
                            name="subtitle"
                            variant="outlined"
                            className={classes.textField}
                            size="small"
                            label="Alt Başlık"
                            fullWidth={true}
                            inputRef={register}
                            error={errors.title ? true : false}
                        ></TextField>
                        <Controller
                            as={
                                <Select input={<Input />} className={classes.textField} fullWidth>
                                    {tags.map((tag, index) => {
                                        return <MenuItem key={index} value={tag}>{tag}</MenuItem>
                                    })}

                                </Select>
                            }
                            name="tag"
                            control={control}
                            error={errors.tag ? true : false}
                            defaultValue={tags[0]}
                        />
                        <TextField
                            id="content"
                            name="content"
                            variant="outlined"
                            className={classes.textField}
                            size="small"
                            label="İçerik"
                            fullWidth={true}
                            inputRef={register}
                            error={errors.content ? true : false}
                        ></TextField>
                        <FileBase64 multiple={false} onDone={({ base64 }) => setFile(base64)} />

                    </form>
                </div>
            </DialogContent>
            <DialogActions>
                <Button color="inherit" onClick={clearForm}>Vazgeç</Button>
                <Button variant="outlined" type="submit" onClick={() => handleSubmit(onSubmit)()} color="primary">Yayınla</Button>

            </DialogActions>

        </Dialog>
    )
}

export default AddPostForm;