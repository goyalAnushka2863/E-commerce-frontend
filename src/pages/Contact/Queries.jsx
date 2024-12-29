import React, { useState } from 'react';

const Queries = () => {
    const [contactDetails] = useState([
        {
            topic: 'Customer Services',
            content: 'Please send us an email at customercare@hygge.com',
        },
        {
            topic: 'Public Relations',
            content: 'You can contact our media team by sending them an email at media@hygge.com',
        },
        {
            topic: 'Large Orders',
            content: 'If you are thinking of making a very large order, please feel free to contact us at sales@hygge.com and we will give you a special discount',
        },
        {
            topic: 'Other Enquiries',
            content: 'For all of your other questions, please send us an email at general@hygge.com',
        },
    ]);

    return (
        <div className="mx-36 my-32 grid grid-cols-2 gap-10">
            {contactDetails.map((detail, index) => (
                <div key={index} className="mb-8 flex flex-col gap-5">
                    <h2 className="text-2xl font-medium mb-2">{detail.topic}</h2>
                    <p className="text-lg font-light">
                        {detail.content.split(' ').map((word, i) =>
                            word.includes('@') ? (
                                <a
                                    key={i}
                                    href={`mailto:${word}`}
                                    className="font-semibold underline hover:text-blue-800"
                                >
                                    {word}
                                </a>
                            ) : (
                                `${word} `
                            )
                        )}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Queries;
