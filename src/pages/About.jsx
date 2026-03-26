import React from 'react'

const About = () => {
    return (
        <section className='mt-10 max-w-4xl mx-auto px-12 py-2  gap-6'>

            <h2 className='font-bold text-3xl mb-6'>About</h2>
            <div className='flex flex-col gap-6 text-xl'>
                <p>
                This Job Portal Application is a modern web app built using React that provides a smooth and intuitive experience for exploring job opportunities. It allows users to browse through a curated list of jobs, view detailed information, and manage saved listings in a clean and user-friendly interface.
            </p>

            <p>
                The application presents job data in a structured format, including role, company, location, salary, experience level, required skills, and descriptions. Each listing is designed to give users a clear understanding of the opportunity, making it easier to decide which roles match their interests and qualifications.
            </p>

            <p>
                Users can efficiently search for jobs and refine results using filters such as job type and experience level. The experience categories are standardized (such as entry-level, junior, mid-level, etc.), making the filtering process more consistent and meaningful.
            </p>

            <p>
                The app also includes dedicated pages for viewing job details and managing saved jobs, allowing users to keep track of positions they are interested in. Navigation across the application is seamless, with a consistent layout that ensures a smooth browsing experience.
            </p>

            <p>
                Built with a component-based architecture, the application emphasizes reusability and clean design. It leverages modern JavaScript features and React hooks to handle state and logic efficiently, resulting in a responsive and maintainable application.
            </p>

            <p>
                Overall, this project demonstrates a practical implementation of a job listing platform, focusing on usability, organization, and a scalable frontend design.
            </p>
            </div>

        </section>
    )
}

export default About