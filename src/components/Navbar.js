import React from "react";

export default function Navbar() {
    return (

    <nav className="flex items-center justify-between p-3 bg-slate-600 flex-1 text-center">
        <img src={process.env.PUBLIC_URL + '/logo512.png'} width="100px"/>
        <div className="flex items-center space-x-3 text-cyan-300">
            <h1 className="text-xl font-Teko">Option1</h1>
            <h1 className="text-xl font-Teko">Option2</h1>
            <h1 className="text-xl font-Teko">Option3</h1>
        </div>
    </nav>

       
    );
}
