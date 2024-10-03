import {Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function () {
    const navigate = useNavigate()

    return (
        <>
            <Button onClick={() => navigate('/products')}>products</Button>
            <Button onClick={() => navigate('/categories')}>categories</Button>
        </>
    )
}