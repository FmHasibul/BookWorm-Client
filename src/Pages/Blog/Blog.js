import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className=' '>
                    <div className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            What are the different ways to manage a state in a React application?
                        </div>
                        <div className="collapse-content">
                            <p>
                                When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                                There are four main types of state you need to properly manage in your React apps:

                                Local state:
                                Local (UI) state – Local state is data we manage in one or another component
                                Global state:
                                Global (UI) state – Global state is data we manage across multiple components.
                                Server state:
                                Server state – Data that comes from an external server that must be integrated with our UI state.
                                URL state:
                                URL state – Data that exists on our URLs, including the pathname and query parameters.
                            </p>
                        </div>
                    </div>

                    <div className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            How does prototypical inheritance work?
                        </div>
                        <div className="collapse-content">
                            <p>
                                How does prototypical inheritance work in react?
                                Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.
                                When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
                            </p>
                        </div>
                    </div>
                    <div className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            What is a unit test? Why should we write unit tests?
                        </div>
                        <div className="collapse-content">
                            <p>
                                A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.
                                To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:
                                <strong>This is why should write unite test</strong>
                                Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
                                Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                                It simplifies the debugging process.
                                Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
                                Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
                                Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.
                                In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback
                            </p>
                        </div>
                    </div>
                    <div className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            React vs.Angular vs.Vue?
                        </div>
                        <div className="collapse-content">
                            <p>
                                The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.

                                Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.

                                Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;