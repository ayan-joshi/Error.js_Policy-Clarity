# PolicyClarity

PolicyClarity is a free and user-friendly platform designed to help users understand complex policies by providing simple and clear summaries. The inspiration behind this project came from a team member's family almost falling victim to a scam. In response to the need for easily understandable policy information, PolicyClarity aims to provide summaries of legal documents, eliminating the need for users to rely on legal expertise.

## Try It Out

Explore PolicyClarity: [PolicyClarity](https://frost-three.vercel.app/)

## What PolicyClarity Does

PolicyClarity addresses the following issues:

1. **Simplifying Government Schemes:** By offering summaries of entire policies, PolicyClarity makes it easier for users to comprehend government schemes.

2. **Reducing Time Consumption:** Users can quickly understand policies, reducing the time it takes to grasp complex legal documents.

3. **Preventing Scams:** Detailed summaries for each page in a policy enhance understanding, reducing the likelihood of falling victim to scams or false information.

## How We Built It

The development process involved setting up the front-end and back-end, building and training a model, creating a server, and integrating the trained model with the front-end. The frontend was developed using React, and the backend, initially planned in Node, was implemented using Python's FastAPI due to compatibility issues. The AI model was built in Python, utilizing generative AI for training.

## Challenges Faced

The team encountered challenges related to WiFi connectivity issues, difficulties in building a model using Hugging Face, and struggles in handling data type changes when sending PDFs from Node to FastAPI. Hosting the FastAPI backend also posed challenges that the team is actively addressing.

## Technologies Used

- **Backend:** Python's FastAPI
- **Frontend:** React, Tailwind CSS
- **AI Model:** Python with generative AI
- **Libraries:** easyocr, genai, tailwind, FPDF, pdfplumber, etc.

## How to run the project?
- **Frontend**
- Firstly,
  ```bash
  git clone https://github.com/ayan-joshi/Error.js_Policy-Clarity.git
  ```
- After this, move into the project directory using,
  ```bash
  cd Error.js_Policy-Clarity
  ```
- Now move into the corresponding client and server directory and run,
  ```bash
  npm i
  ```
- Keep both the command shell's open and finally run,
  ```bash
  npm run start
  ```
- The project will run on your corresponding local host.

## Accomplishments

The team successfully developed a functional platform that delivers policy summaries as intended. Additionally, they take pride in the dedication and efficiency displayed during the 27-hour development period, showcasing the team's commitment to the project.

## Contribution

If you are interested in contributing to PolicyClarity, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork.
5. Open a pull request, describing the changes you made and why they are necessary.

We welcome contributions from the community to make PolicyClarity even more effective and accessible.

## What's Next for PolicyClarity

Future plans for PolicyClarity include the integration of different language models to accommodate users of various languages. The team aims to evolve PolicyClarity into a full-fledged non-profit initiative to assist people on a larger scale.



