import {useRouteError} from "react-router-dom";
import Layout from "../Layout";
function ErrorPage(){
    const error=useRouteError();
    console.error(error)
    return (
        <Layout>
            <main>
                <h1 className="display-1">Whoops! Something went wrong!</h1>
                <p>{error.statusText || error.message}</p>
            </main>
        </Layout>
    );
}
export default ErrorPage;