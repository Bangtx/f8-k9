import {Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function () {
    const navigate = useNavigate()
    const goToProducts = () => {
        navigate('/products')
    }

    return (
        <>
            <Button onClick={goToProducts}>products</Button>
            <Button>categories</Button>
        </>
    )
}