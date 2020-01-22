import React from 'react'
import profilePicture from "../../../static/assets/images/bio/19361.jpg";


export default function () {
    return (
        <div className="content-page-wrapper ">
            <div
                className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <div className="right-column">
                {/* //this is where the bio goes */}

                SUMMARY:
                Student in Software Engineering with experience and extensive education in software design and application development. Excellent communication and interpersonal skills. A fast learner with strong time management and multi-tasking skills. Strong work ethic in team or individual settings to drive product success and process efficiency. Strong troubleshooting and problem-solving skills with an analytical mindset.
                SKILLS
                ● Javascript, ReactJS, Python 3, UML, HTML5, CSS, Flask, JSON, Git, MongoDB, SQL Databases,       	Redis, SCSS/SASS, Flexbox, CSS Grid
                ● Design Tools: Visual Studio Code, Postman, Heroku, GitHub

                PROJECTS & WORK EXPERIENCE
                Portfolio Project- A portfolio application integrating and using API’s, built with React JS, JSX, CSS, SCSS, and Node.js. Site layout with CSS Grid and Flexbox. Includes user authentication and CRUD functionality via API’s and AXIOS.
                Fantastic Fries- A multi page, responsive restaurant website that utilizes HTML5, CSS3, Flexbox, CSS Grid, Animations, media queries, custom forms, responsive images, and a range of front end development techniques
                API Search Engine- React application developed in React JS, SCSS, CSS-grid, Font-Awesome, Search-Bar, Redux, React-router-dom, HOC, Redux-Thunk, Restful Routing, Redux dev tools, Mobile responsiveness,
                PREVIOUS WORK EXPERIENCE:

                Moving Relocation Specialist
                Hello Movers, LLC - Tampa, FL
                January 2016 to Present
                • Ran various sales reports
                • Assembled weekly calls, agendas and correspondences
                • Arranged travel
                • Submitted timely expense filings

                Office Manager/Bookkeeper
                Master & Sons Plumbing - Richmond, VA
                October 2005 to September 2015
                • Handled daily A/P processes;
                • supervised A/P clerks; managed Payroll for 15 employees, vendor/supplier relations; and oversaw the timely, accurate processing of invoices, purchase orders, expense report, credit memos and payment transactions.
                • Maintained adherence to corporate, accounting and GAAP standards;
                • Addressed escalated issues from employees and vendors regarding accounts payable; and ensured accurate and compliant A/P files and records in accordance with company policies and government regulations.

                Medical Secretary
                Brooklyn Premier Orthopedics – New York, NY
                October 1998 to January 2005
                • Supervised front desk staff of 5 people.
                • Created appointments using Picasso EHR.
                • Answered high volume phone lines. Sorting of incoming faxes by specialty.
                • Knowledge of pre-certification/prior authorization. Pre-screened patient's insurance eligibility. • Ensured referrals in system haven't expired. Created referrals. Collected Co-pays.

                EDUCATION
                09/2002- 06/2005      Associates of Applied Science in Paralegal Studies			New York, NY

            </div>
        </div>
    );
}