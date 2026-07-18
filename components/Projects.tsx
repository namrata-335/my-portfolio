import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-[#30050E] px-6 md:px-12 lg:px-24 py-20 scroll-mt-20"
        >
            <div className="w-full lg:w-2/3">
                <h1 className="mb-12 text-5xl md:text-7xl lg:text-8xl font-serif text-[#F6F3E4] leading-none">
                    Projects
                </h1>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">

        <ProjectCard
    
        title="Artificial Intelligence Agents (February - May 2026)"
        shortDescription="This was a series of projects where I implemented classical AI algorithms using the Berkeley Pacman Framework, progressing from graph search and heuristic search to adversarial search and reinforcement learning."
        longDescription={`
                            I began by implementing simple search algorithms for a single agent. This included DFS, BFS, Uniform Cost Search, and A* search. The objective was to find the optimal path through the maze, and this project allowed me to evaluate the time complexity, optimality and completeness of the algorithms.
                            
                            Next, I progressed to a multi-agent environment, where Pacman had to maximize its utility while the ghosts (adverserial agents) attempted to minimize it. This required my agent to make real-time optimal decisions. I implemented Minimax, Alpha-Beta Pruning and Expectimax, designing evaluation functions to balance risk and reward in the deterministic or stochastic environment.

                            Since the environment's transition and reward functions are hardly known in practice, the last part of this project explored reinforcement learning. These concepts were slightly challenging but also highly intuitive, and allowed me to explore how agents learn optimal behaviour through interaction, experience, and trial and error.

                            I realized how useful it can be to prune nodes that will not change the outcome. I noticed the tradeoff between exploration and exploitation, as well as the distinction between Value Iteration, Policy iteration and Policy evaluation. It was also interesting how an approximation function allowed me to generalize a conclusion rather than having to iterate through each scenario. `} 


                                skills={["Python", "Search Algorithms", "Graph and Tree Search", "Heuristic Search", "Multi-Agent Systems", "Minimax", "Alpha-Beta Pruning", "Expectimax", "Q-Learning", "Reinforcement Learning", "Value Iteration"]}

                    
                                image = "/pacman.png"

                                screenshots={[
                                    "/pacman1.png",
                                    "/pacman2.png",
                                ]}
        />

            <ProjectCard
        title="Used Car Prices Analysis (April 2026)"
        shortDescription="Created an EDA report on the 'Used Car Prices' dataset from Kaggle using data cleaning, outlier treatment, and interactive visualizations."
        longDescription={`
            Through this project, I was able to utilize several Python libraries such as 'pandas' and 'numpy' and to take a relatively dense dataset and derive meaningful insights from it. I began by summarizing the data and understanding its structure. I then cleaned and preprocessed the dataset in order to avoid biases and inaccurate results.

            Next, I conducted exploratory analysis by creating interactive visualizations to compare variables and recognize trends. In the end, I was able to draw some meaningful conclusions:
            
             •The majority of used car prices fall within the $10,000 to $30,000 range, indicating a relatively consistent market baseline across states and years

            • Certain states (such as California, Oregon, and Tennessee) show unusually high average prices, whici is likely driven by outliers and high-priced listings

            • Car prices over time generally follow an expected pattern, with newer vehicles exhibiting higher prices, with the exception of some spikes in the early years

            • A noticeable increase in prices around 2019–2020 suggests the influence of external factors such as increased demand and reduced supply during the COVID-19 pandemic

            • Manufacturer plays a significant role in pricing, with luxury brands (Mercedes-Benz) having much higher average prices, while economy brands (Honda, Hyundai) remain more affordable
            
            • Older cars appear more frequently in the dataset, indicating higher availability and popularity, while newer cars, though fewer, tend to raise average prices
            
                `}
        skills = {["EDA", "Data cleaning", "Data Visualization", "numpy", "pandas", "Python"]}

        image = "/used_car_prices.png"

           screenshots={[
                                    "/EDA1.png",
                                    "/EDA2.png",
                                ]}
        />
        
        <ProjectCard
        title="Library Game Jam (March 2026)"
        shortDescription="Created a 3D game 'Manah' in Godot as part of a three-person team during a game jam, winning the Artistic Award"
        longDescription={`
                        Participating in the game jam introduced me to the world of game development and different game genres. This experience allowed me to be creative while also expanding my technical skills.
                        Working with Godot's node-based architecture and gaining hands-on experience with scenes, objects and their behaviors was a fun and interesting experience. I was able to experiment and learn from my teammates who were well-versed with the gaming world. 

                        Our game features a wizard in a haunted library who is being chased by ghosts. The wizard is equipped with three spells, each varying in power and usable under different constraints. At the game jam, I was able to see other teams' work and gain further insight into the breadth of gaming genres.
                        
                        In the future, we aim to refine the game by adding more spells, different ghosts and creating a more complete experience.
                            `}
        
        skills={["GDScript", "Godot", "Piskel"]}


            image = "/game_jam.png"

               screenshots={[
                                    "/game_jame2.png",
                                    "/game_jam3.png",
                                ]}
        />

        

        <ProjectCard
        title="Habit Tracker (March 2026)"
        shortDescription="I created a personalized habit tracker to track my progress and help me remain consistent with daily habits"
        longDescription={`
            Maintaining a healthy routine with school, a part-time job and personal commitments is challenging. To remedy this, I created a Habit Tracker for each week, that tracks simple habits such as  reading, exercising, playing my guitar, and making my bed. 

            The tracker keeps a score for each habit completed, and reaching a certain score unlocks a reward, providing me with a small incentive to remain consistent.

            Although intentionally simple, this project allowed me to gain experience building interactive applications with JavaScript, HTML and local storage. 
            `}
        skills={["HTML", "JavaScript", "Local Storage Implementation"]}

        image = "/habit_tracker picture.png"

           screenshots={[
                                    "/habit_tracker1.png",
                                    "/habit_tracker2.png",
                                ]}
        />
         <ProjectCard
         title="GrowthApp (July- August 2025)"
         shortDescription="I created an Android app inspired by Atomic Habits and Tuesdays with Morrie, designed to promote personal growth through the power of small, consistent changes. These books inspired me to implement the simple principle that incremental habits compound over time to create lasting, meaningful transformation."
         longDescription={`

                        I wanted to build an app that encourages long-term personal growth through small, consistent improvements rather than short bursts of motivation. This app allows the user to set 2 core goals along with 2 smaller habit goals that they wish to incorporate into their lifestyle. They can set a goal duration for each habit, and the app will progressively increase the amount of time they spend on it each day until the target is reached. The idea is that once you get started, however small that start may be, it becomes easy to sustain and build off of.

                        A user can track their progress through a Daily Dashboard and reflect on achievements and growth through the "End of Day Reflection" feature.

                       One feature I'm particularly proud of is Heart Walks, which encourages users to intentionally search for heart-shaped patterns in their surroundings. The idea is based on the principle that what we choose to look for shapes what we notice, helping cultivate mindfulness and appreciation in everyday life.

                       I used Intent-based navigation to pass data across Activities, and built dynamic SeekBar sliders that let users set a custom daily time goal per habit. Other interative UI elements include a Progress bars, a heart counter and timer controls.    

                        In the future, I would like to implement user authentication and possibly use AI to recommend goals or workouts, bringing it closer to a fully featured personal development platform.                       `}

        skills={["Java", "XML", "Android Studio"]}

        image = "/growth_app.png"

           screenshots={[
                                    "/growth_app1.png",
                                    "/growth_app2.png",
                                ]}  
         />

         </div>
</section>
    

    );
}