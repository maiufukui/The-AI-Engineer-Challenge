<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  
**Aspect Tested:**  reasoning

**Response:**  
 Think of object-oriented programming (OOP) as building your program out of little “things” that act like real-world objects. Each thing (an object) knows some facts about itself and can do certain actions.

Core ideas:
- Object: A thing with data and behavior. Example: a Dog object has a name and age (data) and can bark or eat (actions).
- Class: A blueprint for making objects. The Dog class is the recipe; each actual dog (Fido, Luna) is an object made from it.
- Attributes (or properties): The facts an object stores (name, age, color).
- Methods: The actions an object can do (bark, eat, sleep).

Why this helps:
- It organizes code around real-world concepts.
- It lets you reuse code and make changes more safely.

The “four pillars,” simply:
- Encapsulation: Keep data and the methods that work on it together. Hide messy details inside the object so other parts of the program use a clean, simple interface.
- Inheritance: Make a new class from an existing one to reuse and extend it. Example: GuideDog is a specialized kind of Dog.
- Polymorphism: Same action name, different specific behavior. Example: both Dog and Cat have speak(), but one barks and the other meows.
- Abstraction: Focus on what an object does, not how it does it. You drive a car without knowing every engine detail.

Tiny example (in plain English):
- Class: Dog
  - Attributes: name, age
  - Methods: bark(), eat(food)
- Class: GuideDog (inherits from Dog)
  - Extra method: guideOwner()
  - Maybe it “barks” more quietly—an adjusted behavior.

Quick practice (1–2 minutes):
- Pick an everyday thing (Car, BankAccount, Student).
- List 3 attributes (for Car: color, speed, fuelLevel).
- List 3 methods (accelerate, refuel, brake).
- Can you think of a specialized version? (ElectricCar inherits from Car.)

Mindset tip:
It’s normal for OOP to feel abstract at first. Start by modeling simple, familiar objects. If you can describe a thing’s “nouns” (attributes) and “verbs” (methods), you’re already thinking in OOP.

If you want, tell me a real-life object you care about, and I’ll show you how it would look as classes and objects in a language of your choice.

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points…  
**Aspect Tested:**  summarization

**Response:**  
OOP models programs as “objects” that bundle data (attributes) and behavior (methods).
- Classes are blueprints; objects are specific instances made from them.
- Benefits: clearer, real-world organization; code reuse; safer, easier changes.
- Four pillars: encapsulation (hide internals), inheritance (reuse/extend), polymorphism (same action, different behavior), abstraction (focus on what it does, not how).
- Example: Dog class (name, age; bark, eat); GuideDog extends Dog (adds guideOwner, can adjust bark).
- Practice: pick a familiar thing, list 3 attributes and 3 methods, then imagine a specialized subclass.
- Mindset: start simple—identify nouns (attributes) and verbs (methods); you’re already thinking in OOP.

---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:**  creativity

**Response:**  
 Rho-7 swept the empty city plaza long after humans went home. One night rain stitched the stones together and left a small puddle in a cracked tile. When Rho-7 leaned over, a second robot blinked back—a wavering twin wreathed in stars. “Hello,” Rho-7 said to the sky pooled at its feet. The puddle answered in ripples.

They traded stories: Rho-7 with found screws and bottle caps arranged at the edge; the puddle with passing clouds, shoe soles, and the moon. By day, Rho-7 shaded it with a bent street sign, fed it drips from its coolant line, and learned the language of concentric circles.

Summer came. Heat sipped the puddle thin. When it vanished, Rho-7 found the same friend in a teacup’s sheen, a bus window, a spoon—anywhere the world made room for a reflection.

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:**  reasoning

**Response:**  
Buy 3 packs of apples and 3 packs of oranges.

- Apples: 12 ÷ 4 = 3 packs
- Oranges: 9 ÷ 3 = 3 packs

---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone…  
**Aspect Tested:** creativity

**Response:**  
Quick checklist
- 3 packs apples (4-count each)
- 3 packs oranges (3-count each)
- At the shelf: confirm pack sizes; use needed ÷ pack size and round up
- Optional: check weekly deals, bring reusable bags, set a simple budget cap

Ballpark cost (typical US grocery, pre-tax)
- Apples (4-pack): $4–6 each → 3 packs = $12–18
- Oranges (3-pack): $3–5 each → 3 packs = $9–15
- Estimated total: $21–33

Want me to tailor the estimate to your location/store and currency, or keep it as this quick baseline?

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
Yes, answers appear correct and useful but reasoning could potentially be tested. Since there is no memory, I cant refine and iterate.

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  
What makes someone successful and someone not

**Result:**  
“Success” isn’t one thing—it’s progress toward what genuinely matters to you, sustained over time without losing your health or integrity. With that lens, here’s what tends to separate people who reach their version of success from those who don’t:

- Clarity and alignment
  - Clear definition of success (results + how you want to feel)
  - Goals aligned with values, strengths, and chosen arena
- Focus and systems
  - Fewer priorities, deeper work
  - Repeatable routines, calendar-first planning, environment design
- Consistency over intensity
  - Small daily actions that compound
  - Process > motivation; “show up at 70%” beats boom-and-bust
- Feedback and iteration
  - Measurable leading indicators
  - Regular review: what worked, what didn’t, what to change this week
- Mindset and emotional skills
  - Growth mindset, realistic optimism, self-compassion
  - Skillful responses to fear, doubt, and boredom; tolerate discomfort
- Relationships and leverage
  - Mentors, peers, accountability, asking for help
  - Tools, systems, and collaboration that multiply output
- Energy and resilience
  - Sleep, movement, nutrition, recovery
  - Boundaries that protect focus and well-being
- Luck and context (often overlooked)
  - Timing, privilege, networks, and randomness matter
  - You can’t control luck, but you can increase “luck surface area” by showing up, sharing work, and trying more (smart) bets

Common blockers
- Vague goals, chasing others’ definitions, scattered effort
- Perfectionism, fear of judgment, quitting during plateaus
- Ignoring basics (sleep, boundaries), going it alone

A simple way to tilt the odds in your favor
1) Define success for the next 90 days (1 outcome + 2–3 feelings you want more of).
2) Identify the lead measures (daily/weekly actions that drive the outcome).
3) Choose the smallest daily habit that makes success likely (15–30 minutes).
4) Schedule it. Use if-then plans and remove friction the night before.
5) Track a simple scoreboard (checkboxes, not elaborate apps).
6) Weekly 20-minute review: wins, lessons, one tweak, next week’s plan.
7) Build support: one accountability partner or community; ask for specific help.

Quick self-check prompts
- If I only achieved one thing in the next 90 days, what would change everything else?
- What’s the 20% that drives 80% of progress here?
- What tiny step can I do today even on a low-motivation day?

If you want, tell me what “successful” looks like for you right now—career, health, relationships, something else—and I’ll help you design a focused, realistic plan.
---

**Prompt:**  
what are best practices to achieve personal goals

**Result:**  
Great question. Here’s a concise, proven playbook you can use for almost any personal goal.

1) Start with clarity and focus
- Connect to why: Write one sentence on why this matters and how life improves if you succeed.
- Pick one main goal (two max). Too many goals dilute progress.
- Make it SMARTER: Specific, Measurable, Attractive (to you), Realistic, Time-bound, Evaluated, and Recorded.

2) Turn outcomes into behaviors
- Identify 1–3 lead habits that drive the result (e.g., “study 45 minutes daily,” not just “get an A”).
- Make a “minimum viable” version for busy days (two-minute rule): the smallest action that still keeps the chain.

3) Plan the when/where/how
- Implementation intentions: “If it’s 7:00 am at the kitchen table, then I’ll write for 25 minutes.”
- Time-block it on your calendar like an appointment.
- Prepare the night before (materials laid out, checklist ready).

4) Design your environment
- Reduce friction for good habits (gear ready, healthy food visible).
- Add friction for temptations (apps off phone, snacks out of sight).
- Create cues and rituals that start the behavior (same playlist, same place).

5) Make it rewarding now
- Immediate, small rewards after the habit (checkmark, short break).
- Temptation bundling: pair the task with something you enjoy (podcast only during workouts).
- Celebrate small wins to reinforce identity: “I’m the kind of person who shows up.”

6) Anticipate obstacles
- Do a quick premortem: “What could derail me?” and write an if-then for each.
  Example: “If I miss a morning session, then I’ll do 15 minutes after lunch.”
- Use “never miss twice” as a rule. Progress over perfection.

7) Track and review
- Track 1 outcome metric and 1–2 behavior metrics (e.g., workouts/week).
- Weekly review (15 minutes): What worked? What didn’t? What’s the one tweak for next week?
- Work in 4–12 week cycles, then reassess and level up.

8) Protect your energy and attention
- Sleep, nutrition, and movement first—goals fail without energy.
- Create focus blocks (phone out of room, notifications off).
- Schedule recovery and boundaries (say no to low-priority commitments).

9) Use support and accountability
- Tell a friend/coach your plan and check in weekly.
- Join a community aligned with your goal.
- Consider stakes (donation pledge) if that motivates you.

10) Mindset that sticks
- Identity-based: Act like the person who already has the result.
- Growth mindset and self-compassion: setbacks are data, not verdicts.
- Consistency beats intensity: small daily actions compound.

Quick template you can fill in today
- Goal (SMARTER): ___________________________________
- Why it matters (1–2 lines): __________________________
- Lead habits (1–3): __________________________________
- Minimum version (2-minute rule): _____________________
- When/where (implementation intention): _______________
- Obstacles → If-then plans: ___________________________
- Tracking (behavior + outcome): _______________________
- Weekly review time: _________________________________
- Reward after completing habit: _______________________
- Accountability (who/when): __________________________

If you share one specific goal, I’ll help you turn it into a simple 4–12 week plan with tailored habits, obstacles, and metrics.

---

**Prompt:**  
what is the meaning of life 

**Result:**  
Big question. My short take: meaning isn’t something we “find” once; it’s something we create and renew through how we live. Most people discover it in a blend of three themes:
- Connection: loving and being loved, belonging to something bigger than yourself.
- Growth: learning, practicing, becoming more capable and more yourself.
- Contribution: using your strengths to help, build, or care for others.

A simple way to explore your own meaning
- Values: What do you want your life to stand for? List your top 5 values, then circle the top 2 you’re most proud of when you live them.
- Stories: When in the last year did you feel most alive, proud, or at peace? What were you doing, and with whom?
- Strengths: What do people reliably come to you for? What feels energizing, not draining?
- Service: Whose life gets better when you show up? How could you help them in a way that also lights you up?
- Presence: What ordinary moments make you quietly glad to be here?

One-week experiment to feel more meaning
- Daily: do one thing for your body (move, rest, nourish), one for your mind (learn, create), and one for someone else (a check-in, a small favor).
- Choose a “tiny purpose project”: 20–30 minutes a day on something that grows you and helps someone (e.g., mentoring a junior, cooking for a neighbor, practicing a craft to share).
- End of day: jot 3 sentences—What mattered today? What did I learn? Who did I help?

Optional purpose prompt
“I use my [strengths/skills] to [serve/contribute to] [people/causes] because [reason that moves you].” Draft it, test it for a week, adjust.

If you’d like, tell me what moments recently felt most meaningful—or where the emptiness shows up—and we can shape a personal compass together.

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
Its pretty good. Professional but empathetic. Answers are direct and clear, and easy to follow. Able to answer and break down complex questions.

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  
what time is my yoga class tomorrow?

**Result:**  
I don’t have access to your calendar, so I’m not sure yet. Can you tell me the studio, class name/instructor, and your city/time zone? If it’s a recurring class, what time is it usually on this weekday?

Quick ways to check right now:
- Open the studio’s app (or ClassPass/Mindbody) and look at tomorrow’s schedule or your bookings.
- Search your email/texts for the studio name or “confirmation.”
- Check your phone calendar for tomorrow.

If you share the details, I can help confirm the time and set a simple plan: when to leave, a reminder, and a quick pack list so you arrive calm and ready.

---

**Prompt:**  
 what is the weather today

**Result:**  
I don’t have access to live weather data or your location. Tell me your city (or ZIP/postcode) and I’ll help you interpret today’s forecast and plan what to wear/pack.

Quick ways to check right now:
- On your phone: Apple Weather or Google/Android Weather
- Websites: weather.com, your national service (NWS/NOAA in the US, Met Office UK, Environment Canada, BOM Australia)
- Search “weather [your city]”

Planning tip: once you see the forecast, aim for comfort and options—layer up if temps swing, bring a light rain shell if precipitation is >40%, and use sunscreen/hat if UV index is 6+. If you share the details, I’ll help you turn it into a simple game plan for your day

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  
No memory, real time data, external tools which limit what the app can do. 


---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  
<!-- Describe what you changed -->

**Results:**  
<!-- What improved? What didn’t? -->

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**


https://frontend-dun-kappa-b0p83v3us5.vercel.app/
https://github.com/maiufukui/The-AI-Engineer-Challenge




</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
