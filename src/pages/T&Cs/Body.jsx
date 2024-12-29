import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";

const Body = () => {
    const [terms] = useState([
        {
            topic: 'Introduction',
            ques: [
                {
                    question: 'What are your Terms & Conditions?',
                    answer: 'Our Terms & Conditions outline the rules and guidelines that govern the use of our website. You can read them in detail on the Terms & Conditions page.',
                },
                {
                    question: 'Why do you collect personal data?',
                    answer: 'We collect personal data to enhance your shopping experience, process your orders efficiently, and provide tailored services.',
                },
                {
                    question: 'How do you use my personal data?',
                    answer: 'Your personal data is used strictly for order processing, customer support, and improving our services. We adhere to strict data protection regulations.',
                },
            ],
        },
        {
            topic: 'Payment Terms',
            ques: [
                {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept major credit and debit cards, PayPal, and other secure online payment options.',
                },
                {
                    question: 'Can my payment be canceled?',
                    answer: 'Yes, we reserve the right to cancel your payment if it violates our payment policies or due to suspected fraudulent activity.',
                },
            ],
        },
        {
            topic: 'Orders',
            ques: [
                {
                    question: 'How do I place an order on your website?',
                    answer: 'To place an order, select your desired product, add it to your cart, and proceed to checkout. Follow the payment instructions to complete your purchase.',
                },
                {
                    question: 'What are your return and refund policies?',
                    answer: 'Products can be returned within 30 days of purchase if they meet our return criteria. Refunds are processed within 7-10 business days.',
                },
                {
                    question: 'How long does it take to dispatch my order?',
                    answer: 'Orders are typically dispatched within 1-2 business days. Shipping times depend on the chosen method and location.',
                },
            ],
        },
        {
            topic: 'Shipping',
            ques: [
                {
                    question: 'Do I have to pay for shipping?',
                    answer: 'Shipping fees depend on your location and order total. We offer free shipping on orders over a specific amount. Check our shipping policy for details.',
                },
                {
                    question: 'What shipping company do you use?',
                    answer: 'We partner with leading shipping companies like FedEx, UPS, and DHL for reliable delivery.',
                },
                {
                    question: 'How long does shipping take?',
                    answer: 'Domestic orders typically arrive within 3-7 business days, while international orders may take 7-14 business days.',
                },
            ],
        },
        {
            topic: 'Discounts',
            ques: [
                {
                    question: 'Do you offer discounts?',
                    answer: 'Yes, we provide discounts during seasonal sales and special events. Subscribe to our newsletter for exclusive offers.',
                },
            ],
        },
        {
            topic: 'Other',
            ques: [
                {
                    question: 'Where can I find product reviews?',
                    answer: 'Reviews are available on the respective product pages under the "Customer Reviews" section.',
                },
                {
                    question: 'How can I contact you?',
                    answer: 'You can reach us via the "Contact Us" page on our website, email us at support@example.com, or call us at 123-456-7890.',
                },
            ],
        },
    ]);
    

    const [openStates, setOpenStates] = useState(
        terms.map((section) => section.ques.map(() => false))
    );

    const toggleQuestion = (sectionIndex, questionIndex) => {
        setOpenStates((prev) =>
            prev.map((sectionState, i) =>
                i === sectionIndex
                    ? sectionState.map((state, j) =>
                        j === questionIndex ? !state : state
                    )
                    : sectionState
            )
        );
    };

    return (
        <>
            {terms.map((section, sectionIndex) => (
                <div key={sectionIndex} className="my-32">
                    <span className="text-3xl font-semibold mx-36">{sectionIndex+1+'. '+section.topic}</span>
                    <div className="mx-36 grid grid-cols-2 gap-20 mt-16">
                        {section.ques.map((q, questionIndex) => (
                            <div key={questionIndex} className="flex flex-col">
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-medium">
                                        {sectionIndex+1}.{questionIndex + 1} {q.question}
                                    </span>
                                    <FaAngleDown
                                        className={`w-12 h-12 p-4 rounded-full border cursor-pointer transition-transform duration-300 ${openStates[sectionIndex][questionIndex]
                                                ? 'rotate-180'
                                                : ''
                                            }`}
                                        onClick={() =>
                                            toggleQuestion(sectionIndex, questionIndex)
                                        }
                                    />
                                </div>
                                <div
                                    className={`overflow-hidden transition-[max-height] duration-300 ease-out ${openStates[sectionIndex][questionIndex]
                                            ? 'max-h-40'
                                            : 'max-h-0'
                                        }`}
                                >
                                    <span className="text-xl font-light block mt-2">
                                        {q.answer}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Body;
