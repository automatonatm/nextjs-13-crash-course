import {Suspense} from 'react';
import Repo from "../../../components/Repo";
import Link from "next/link";
import RepoDirs from "../../../components/RepoDirs";

const RepoPage = ({params}) => {

    const {name} = params

    return (
        <div className="card">
            <Link href="/code/repos" className="btn btn-back">Back to Repositories</Link>

            <Suspense fallback={<div>Loading Repo</div>}>
                <Repo name={name}/>
            </Suspense>

            <Suspense fallback={<div>Loading Repo Directories</div>}>
            <RepoDirs name={name}/>
            </Suspense>


        </div>
    );
};

export default RepoPage;
