import React from "react";

export default function Main() {
    return (
        <main 
        className="bg-cyan-900 text-stone-300 bg-no-repeat bg-contain bg-right min-h-full" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/bong.png)`}}>
            <h1 className="text-8xl font-Teko p-8">How weed can affect on you in positive way?</h1>
            <ul className="list-disc list-inside space-y-8 flex-grow">
                <li className="text-4xl font-Teko" style={{listStyleImage: `url(${process.env.PUBLIC_URL}/cannabis.png)`}}>Relaxation: Cannabis is known for its calming effects, and many people use it to unwind and destress after a long day.</li>
                <li className="text-4xl font-Teko" style={{listStyleImage: `url(${process.env.PUBLIC_URL}/cannabis.png)`}}>Creativity: Some people report that cannabis can help stimulate creativity and enhance their ability to think outside the box.</li>
                <li className="text-4xl font-Teko" style={{listStyleImage: `url(${process.env.PUBLIC_URL}/cannabis.png)`}}>Pain relief: Cannabis has been used as a natural pain reliever for centuries, and many people find it helpful for managing chronic pain.</li>
                <li className="text-4xl font-Teko" style={{listStyleImage: `url(${process.env.PUBLIC_URL}/cannabis.png)`}}>Socialization: Cannabis can be a social activity that brings people together, similar to having a drink with friends.</li>
                <li className="text-4xl font-Teko" style={{listStyleImage: `url(${process.env.PUBLIC_URL}/cannabis.png)`}}>Curiosity: For some, trying cannabis can be a new and exciting experience, and the novelty and exploration of trying something new can be an enjoyable experience.</li>
                <li className="text-4xl font-Teko" style={{listStyleImage: `url(${process.env.PUBLIC_URL}/cannabis.png)`}}>Spirituality: Cannabis has been used in spiritual and religious contexts for centuries, and some people find that it can help them connect with a higher power or explore their spirituality.</li>
                <li className="text-4xl font-Teko" style={{listStyleImage: `url(${process.env.PUBLIC_URL}/cannabis.png)`}}>Medicinal benefits: Cannabis is being increasingly recognized for its potential therapeutic benefits, such as treating anxiety, depression, and other mental health conditions.</li>
            </ul>
        </main>
    );
}
