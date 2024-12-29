import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";

const General = () => {
    const [faq] = useState([
        {
            topic: 'General',
            ques: [
                {
                    question: 'How do I place an order on your website?',
                    answer: 'All you need to do to place an order on our website is to choose the product that you would like to buy, then add it to cart and pay for it using any of the supported payment methods.',
                },
                {
                    question: 'What is your return policy?',
                    answer: 'You can return products within 30 days of purchase if they meet our return criteria.',
                },
                {
                    question: 'Do you offer an option to send a product as a gift?',
                    answer: 'Yes, we offer a gift option at checkout with personalized messages.',
                },
            ],
        },
        {
            topic: 'Checkout',
            ques: [
                {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept major payment methods including credit cards, debit cards, PayPal, and other secure online payment options.',
                },
                {
                    question: 'Do you offer an option to pay for the product over time?',
                    answer: 'Yes, we offer installment payment options through selected partners. You can choose this option during checkout if eligible.',
                },
            ],
        },
        {
            topic: 'Shipping',
            ques: [
                {
                    question: 'Do I have to pay for the shipping?',
                    answer: 'Shipping costs depend on the delivery location and the total order value. We offer free shipping on orders over a specific amount. Please check our shipping policy for details.',
                },
                {
                    question: 'How long does it take for you to dispatch my order?',
                    answer: 'Orders are usually dispatched within 1-2 business days after payment confirmation. During peak times, it might take slightly longer.',
                },
                {
                    question: 'What shipping company do you use?',
                    answer: 'We partner with reputable shipping companies like FedEx, UPS, and DHL to ensure fast and reliable delivery.',
                },
                {
                    question: 'How long does it usually take for my order to arrive?',
                    answer: 'Delivery times vary depending on your location. Typically, orders arrive within 3-7 business days for domestic shipping and 7-14 business days for international shipping.',
                },
            ],
        },
        {
            topic: 'Discounts',
            ques: [
                {
                    question: 'Do you offer any discounts on your website?',
                    answer: 'Yes, we offer various discounts during special sales events and seasonal promotions. Additionally, you can subscribe to our newsletter to receive exclusive discount codes and updates.',
                }
            ],
        },
        {
            topic: 'Other',
            ques: [
                {
                    question: 'Where can I find the reviews?',
                    answer: 'You can find reviews for our products on the product pages. Scroll down to the "Customer Reviews" section to see what others are saying.',
                },
                {
                    question: 'How do I contact you?',
                    answer: 'You can contact us through the "Contact Us" page on our website. Alternatively, you can email us at support@example.com or call us at 123-456-7890.',
                },
            ],
        },
    ]);

    const [openStates, setOpenStates] = useState(
        faq.map((section) => section.ques.map(() => false))
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
            {faq.map((section, sectionIndex) => (
                <div key={sectionIndex} className="my-32">
                    <span className="text-3xl font-semibold mx-36">{section.topic}</span>
                    <div className="mx-36 grid grid-cols-2 gap-20 mt-16">
                        {section.ques.map((q, questionIndex) => (
                            <div key={questionIndex} className="flex flex-col">
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-medium">
                                        {questionIndex + 1}. {q.question}
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

export default General;
