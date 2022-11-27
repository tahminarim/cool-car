import React from 'react';

const Blog = () => {
    return (
        <div>

            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
                    1. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
                    <p>SQL databases are vertically scalable, while NoSQL databases are
                        The Four Kinds of React State to Manage:
                        -Local state.
                        -Global state.
                        -Server state.
                        -URL state..</p>
                </div>
            </div>


            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
                    2. How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
                    <p>Simply put, prototypical inheritance refers to the ability to access object properties from another object.
                        We use a JavaScript prototype to add new properties and
                        methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.
                    </p>
                </div>
            </div>



            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
                    3. What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly,
                        it can help detect early flaws in code which may be more difficult to find in later testing stages.<br />
                        For Test-Driven Development (TDD), write unit tests before writing any implementation.
                        This makes the implementation details in the code shorter and easier to understand. In this instance, the best time to write unit tests is immediately.
                        For others, most developers write unit tests after the code's been written.
                    </p>
                </div>
            </div>



            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
                    4. React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
                    <p>If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.
                        React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.
                        React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.
                        <br></br>
                        The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.
                        Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.
                        Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.
                        <br />
                        In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.
                        A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.
                        It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Blog;