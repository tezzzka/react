import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <div><h2>There is no any page to show u</h2></div>
            <div>
                <Link to="/">main</Link>
            </div>
        </>
    )
}
export { NotFound }