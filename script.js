document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    // Custom response patterns
    const responses = {
        "transport":"buses are available as per the area you live.",
        "transportation":"buses are available as per the area you live.",
        "12 admission":"For direct admission student have to take approval from CBSE Bhubaneswar",
        "admission class 12":"For direct admission student have to take approval from CBSE Bhubaneswar",
        "class 12":"For direct admission student have to take approval from CBSE Bhubaneswar",
        "12":"For direct admission student have to take approval from CBSE Bhubaneswar",
        "uniform":"steel gray pants or skits with white shirt",
        "age":"for admission in class-1 age should be 6+",
        "age criteria":"for admission in class 1 age should be 6+",
        "environment": "supportive",
        "are you human": "no i am a chatbot how can i be human",
        "by":"same to you",
        "who created you":"MR.Shaikh Haareess and MR.Prakhar created me",
        "how are you made":"i am created with java script and my creator is Shaikh Haareess",
        "another joke":"Q:why wouldn’t the elephant use the computer? a: He was afraid of the mouse!",
        "tell me a joke":"Q:why was the teacher wearing sunglasses in the classroom? a:Because the class was so bright",
        "timings":"The school typically operates from Monday to Friday. The exact hours may vary, but classes generally start around 8:00 aM and end around 2:00 PM. For the most accurate timing, please refer to the school's official website or contact the administration.",
        "fees during admission":"according to Ranks (officers,jco,or,civ) fees will be taken",
        "criteria for admission":"Birth Certificate and serving certificate is compulsory",
        "last day for fees":"Every Month of 20th",
        "url":"https://www.apspanagarh.com",
        "fees": "acording to the rank fees will be taken",
        "fees structure": "The fee structure varies depending on the class and other factors. For detailed information, you should refer to the school’s fee brochure or contact the school’s finance office.",
        "attendance Policy": "75% manadtory",
        "contact": "army Public School, panagarhPurba Barddhaman,west Bengal - 713420Contact No :  +913432513216 Email address : aps.panagarh2012@gmail.com",
        "what is the fees strecture": "you can see the fees strecture https://www.apspanagarh.com/admission.php?id=Nw%3D%3D&sid=MTY%3D this website",
        "fees": "according to ranks quaterly fees will be taken",
        "who are the best teachers": " the best teachers include Rupeshwari ma'm Sorabh sir,Nazmi ma'm and the seniors",
        "homework": "depends upon the teaching style of the teacher",
        "tc": "take tc form and apply from office",
        "quality of education": "good",
        "healthcare facilty": "first aid kit and care room",
        "activities": "army public school panagarh offers a variety of extracurricular activities, including sports, music, dance, drama, art and craft, and various clubs. These activities are designed to enhance students' overall development and interests.",
        "parents visit": "after school hours",
        "play stone paper sisor": "ok lets play!if you win you can collect 5000 rupees from the office write your input",
        "stone": "paper,ah! i won try again",
        "paper": "sisor,ah! i won try again",
        "sisor": "stone,ah! i won try again",
        "jobs": "ask for available vacancies in the office",
        "can you help me in homework": "no",
        "do you know Prakhar": "Yes he is my creator",
        "do you Know shaikh": "Yes he is my creator",
        "who was Sayantan Barman": "the best teacher aps panagarh has ever witnessed",
        "mobile phone": "not allowed",
        "phone": "not allowed",
        "who is the goat": "Sayantan Barman",
        "shaikh":"he is my god because he created me",
        "curriculum": "The school follows the curriculum set by the Central Board of Secondary Education (CBSE), which includes a wide range of subjects from kindergarten through secondary education.",
        "timing": "The school typically operates from Monday to Friday. The exact hours may vary, but classes generally start around 8:00 aM and end around 2:00 PM. For the most accurate timing, please refer to the school's official website or contact the administration.",
        "admission": " To apply for admission, you need to fill out the application form available on the school’s official website or at the school’s administrative office. The admission process usually involves submitting required documents, an entrance test, and an interview.you can also regester for admission online by this link https://aweserp-stg.inroad.in/webinterface/searchschool",
        "sourabh mukharjee": "he is the god of computer",
        "prakhar": "mr prakhar is also my creator ",
        "shaikh": "mr shaikh is my creator",
        "why are you created": "for asking questions",
        "how are you": "i am fine",
        "which languages can you speak": "only english",
        "who made you": "i am made by Shaikh Haareess and Prakhar",
        "what is your name": "aps buddy",
        "hey":"hello",
        "how is the environment of the school":"Supportive",
        "what is the admission procedure":"Online Regestratin then physical verificiation",
        "what is the criteria for admission":"Birth Certificate and serving certificate is compulsery",
        "what are the total charges at the time of fresh admission":"according to Ranks (officers,jco,or,civ) fees will be taken",
        "what are the charges of quaterly fees":"according to ranks quaterly fees will be taken",
        "how much charges during late fell fees":"upto 20th of the Current Month-100 upto 1 Menth-200, upto 2 months",
        "what are the age criteria of class 1": "AGE should be 6+",
        "when is the last date of Fees Payment": "Every Month of 20th",
        "hi":"Hi there how can i assist you",
        "do you know a joke": "Nate: why was school easier for cave people. Kate: why. Nate: Because there was no history to study",
        "how much amount will deduct in security money (Rank wise)": "Officer:7920 Jco:5280 Or:3960 Civ:11880",
        "hello": "Hi there! How can I help you today?",
        "how are you": "I'm just a bot, but I’m doing great! How can I assist you?",
        "what is your name": "I’m a chatbot created by Shaikh Haareess and Prakhar Kumar Parashar. You can call me aps Buddy.",
        "bye": "Goodbye! Have a great day!",
        "what is army public school panagarh": "army public school panagarh is an educational institution located in panagarh, west Bengal, India. It provides quality education to children of army personnel and civilians, following the curriculum prescribed by the CBSE (Central Board of Secondary Education).",
        "what are the school’s operating hours": "The school typically operates from Monday to Friday. The exact hours may vary, but classes generally start around 8:00 aM and end around 2:00 PM. For the most accurate timing, please refer to the school's official website or contact the administration.",
        "how can i apply for admission to army public school panagarh": " To apply for admission, you need to fill out the application form available on the school’s official website or at the school’s administrative office. The admission process usually involves submitting required documents, an entrance test, and an interview.",
        "what curriculum does army public school panagarh follow": "The school follows the curriculum set by the Central Board of Secondary Education (CBSE), which includes a wide range of subjects from kindergarten through secondary education.",
        "what extracurricular activities are offered": "army public school panagarh offers a variety of extracurricular activities, including sports, music, dance, drama, art and craft, and various clubs. These activities are designed to enhance students' overall development and interests.",
        "how can I contact a specific teacher or staff member": "You can contact specific teachers or staff members by reaching out to the school’s administrative office. They can provide you with the contact details or arrange a meeting with the concerned person.",
        "are there any parent-teacher meetings scheduled throughout the year": " Yes, the school typically holds parent-teacher meetings at regular intervals to discuss students' progress and address any concerns. The dates for these meetings are usually communicated through the school’s notice board or website.",
        "what is the fee structure for army public school panagarh": "The fee structure varies depending on the class and other factors. For detailed information, you should refer to the school’s fee brochure or contact the school’s finance office.",
        "how can I contact army public school panagarh": "You can contact army public school panagarh via phone at +913432513216, or email at aps.panagarh2012@gmail.com. You can also visit their official website for more details or address any queries.",
        "what is the school’s address": "The address of army public school panagarh is army Public School, panagarh Purba Barddhaman,west Bengal - 713420. For directions, please refer to the school's website or contact the school directly.",
        "what is the url of aps panagarh": "https://www.apspanagarh.com",
        "what are the Criteria for admission": "Birth Certificate and seswing certificate is Compulsory.",
        "what are the total charges at the time of fresh admission": "according to Ranks (off , Jco , or, civ fees) will be taken",
        "what are the charges of quarterly fees": "according to Ranks quarterly fees will be taken.",
        "how much charges during late felt fees": "upto 20 th of the Current Month-100, upto 1 Month-200, upto 2 month-750",
        "what are the age criteria of class-1": "aGE should be 6+",
        "when is the last date of Fees Payment": "Every Month of 20th",
        "how much amount will deduct in security money (Rank wise)": "OFFR-7920 JCO / 5280 OR 3960 3960, τιν 11880",
        "what is the school timings": "7:30 aM to 1:30 PM",
        "what is the Name of Fees Payment link": "https://erp.awesindia.edu.in/webInterface/PayFees",
        "how can I track my application": "In ERP website.",
        "what is the Procedure of taking tc": "taking tc form and apply",
        "what are the documents required for tc": "tc form,cancel cheque and fee recept",
        "what are the documents required for tc": "steel grey trouser and white shirt",
        "who will Provide House dress code": "Class teacher",
        "where I will get the students Books, Dress & shoes": "panagarh Deep Jyoti",
        "where is the Book shop in panagarh": "Near Gurudwara",
        "contact no. of Book shop (deep jyoti)": "9474700043",
        "what are the documents requiring for Pen": "Details of Student, Passport size Photo and TC.",
        "what is the timing for meeting class  Teacher": "after 1:30 Pm",
        "what are the facilities Provided by School during minor injuries of students": "Sick Room and first aid kit is available",
        "are there computer labs and Libraries available to Students": "Yes",
        "are there science Laboratories available for students": "Yes",
        "how does school handle medical emergencies": "by taking student to MH",
        "how can parents keep track of their childs proggress": "by whatsapp",
        "what is the school policy on parents visiting the school": "taking outpass from the entery gate",
        "what is the tuition fee Structure": "Fees Stouchure list is available in the school website",
        "what is the school's refund Policy": "after leaving the school Security  money  will  be refund",
        "what is the school's attendance policy": "75% Mandatory",
        "what is the policy on mobile phone use during School hours": "Not allowed in School.",
        "what is the qualification of teachers": "Bachelor degree & B.ed. Teachers have the qualification of PGT and TGTs",
        "what Sports facilities does the School have": "Cricket Pitch, Basketball Courts, tennis Courts etc.",
        "are there regular Parent teacher meetings": "yes",
        "what extracurricular activities are offered": "Music, arts, sports games, Debate etc.",
        "how does the school support students with special Needs": "By taking extra classes and helping the students",
        "how does the school Prepare Students for higher education": "By Personalized guidance on course selection and academic Planning.",
        "what is the schools homework Policy": "Teachers Provide support and guidance for homework completion",
        "are there opportunities four students to Participate in gifted Programs": "Yes",
        "how does the school handle teacher absences": "By Finding a substitute teacher",
        "how does the school handle Student health issues": "By giving Medicines & Sick Room is also available",
        "is there a Schoolbus service": "Yes",
        "what is the school's Policy on Parent visits": "after 1:30 PM Parents can meet class teachers.",
        "percentage required to pass 9": "33% in all subjects",
        "marks required to pass": "33% in all subjects",
        "transportaition services": "buses are available",
        "minimum age":"6 years",
        "teachers qualification":"Bachelor degree & B.ed",
        "refund Policy": "after leaving the school Security  money  will  be refund",
        "Fees Payment link":"exp.awesindia.edu.in",
        "contact army public school panagarh": "You can contact army public school panagarh via phone at +913432513216, or email at aps.panagarh2012@gmail.com. You can also visit their official website for more details or address any queries.",
        "contact": "You can contact army public school panagarh via phone at +913432513216, or email at aps.panagarh2012@gmail.com. You can also visit their official website for more details or address any queries.",
        "contact school": "You can contact army public school panagarh via phone at +913432513216, or email at aps.panagarh2012@gmail.com. You can also visit their official website for more details or address any queries.",
        "fees amount": "the payment amount would be decided by the rank of the gaurdian",
        "what is the process of direct addmission of class x and xii":"For direct admission student have to take approval from CBSE Bhubaneswar",
        "why parents claim CEa Certificate":"Because parents get money from govt for further education for child",
        "how many days students get security money refund":"within 7 - 10 days",
        "how much time will take after applying TC":" within 3 days",
        "is their any entrance exam who came from other school":"yes",
        "direct addmission of class 10 & 12":"For direct admission student have to take approval from CBSE Bhubaneswar",
        "direct addmission of class 10":"For direct admission student have to take approval from CBSE Bhubaneswar",
        "direct addmission of class 10":"For direct admission student have to take approval from CBSE Bhubaneswar",
        "direct addmission of class 12":"For direct admission student have to take approval from CBSE Bhubaneswar",
        "direct addmission of class 12":"For direct admission student have to take approval from CBSE Bhubaneswar",
        "class 10 admission":"For direct admission student have to take approval from CBSE Bhubaneswar",
        "class 10":"For direct admission student have to take approval from CBSE Bhubaneswar",
        "admission of class 10":"For direct admission student have to take approval from CBSE Bhubaneswar",
        "10":"For direct admission student have to take approval from CBSE Bhubaneswar",
        "10 class":"For direct admission student have to take approval from CBSE Bhubaneswar",
        "admission 10":"For direct admission student have to take approval from CBSE Bhubaneswar",
        "10 admission":"For direct admission student have to take approval from CBSE Bhubaneswar",
        "computer facilities":"are available",
        "who is rohan sir":"king of computers the real goat",
        "what are the core functions of aps panagarh":"aps panagarh primarily focuses on providing administrative and operational support for defense-related activities, including managing logistics, coordinating supply chains, and ensuring efficient resource allocation.",
        "how does aps panagarh contribute to the local community":"aps panagarh contributes to the local community through employment opportunities, community outreach programs, and support for local infrastructure projects, as well as engaging in social responsibility activities.",
        "what are the key qualities aps panagarh looks for in its employees":"aps panagarh values qualities such as integrity, dedication, teamwork, and a strong work ethic, along with technical skills relevant to defense operations and adaptability to a dynamic work environment.",
        "how does aps panagarh ensure the safety and security of its operations":"aps panagarh ensures safety and security through compliance with defense protocols, regular security audits, and stringent safety measures, while adhering to national security guidelines and conducting regular staff training.",
        "what opportunities for advancement does aps panagarh offer its employees":"aps panagarh offers career advancement opportunities through promotions based on performance, specialized training programs, and leadership development initiatives, encouraging employees to take on new roles and challenges.",
        "how does aps panagarh incorporate technological advancements into its operations":"aps panagarh incorporates technological advancements by investing in state-of-the-art equipment and software, adopting new technologies for operational efficiency, and continuously updating systems to align with industry standards.",
        "what are the primary challenges aps panagarh faces, and how are they addressed":"Primary challenges include managing logistical complexities, adapting to evolving defense requirements, and maintaining operational efficiency, which are addressed through strategic planning, robust management practices, and ongoing process improvements.",
        "can you describe the work environment at aps panagarh":"The work environment at aps panagarh is collaborative and professional, emphasizing teamwork and mutual respect, with a culture of transparency and support where employees are encouraged to contribute ideas and work towards common goals.",
        "what role does aps panagarh play in defense sector modernization":"aps panagarh plays a critical role in defense sector modernization by providing logistical support, managing supply chains, and facilitating the integration of advanced technologies and improvements in defense operations.",
        "how does aps panagarh maintain quality and compliance in its operations":"aps panagarh maintains quality and compliance through strict adherence to defense standards and regulations, regular quality control checks, and comprehensive audits to ensure processes and procedures meet required benchmarks.",
        "what strategies does aps panagarh use to stay competitive in the defense sector":"aps panagarh stays competitive by continuously improving operational efficiency, investing in advanced technologies, and adopting best practices in logistics and supply chain management. The organization also focuses on innovation and strategic partnerships to enhance its offerings.",
        "how does aps panagarh handle changes in defense regulations and policies":"aps panagarh handles changes in defense regulations and policies by maintaining close communication with regulatory bodies, regularly reviewing and updating compliance protocols, and training staff to ensure adherence to new requirements.",
        "what measures does aps panagarh take to ensure environmental sustainability":"aps panagarh promotes environmental sustainability by implementing eco-friendly practices, reducing waste, and adhering to environmental regulations. The organization may also invest in green technologies and sustainability initiatives to minimize its ecological footprint.",
        "how does aps panagarh support innovation within the organization":"aps panagarh supports innovation by encouraging a culture of creativity, investing in research and development, and providing resources and support for employees to explore new ideas and technologies. The organization also fosters collaboration with industry experts and research institutions.",
        "what kind of partnerships does aps panagarh engage in to enhance its operations":"aps panagarh engages in partnerships with defense contractors, technology providers, and research institutions to enhance its operations. These partnerships help in accessing advanced technologies, improving operational processes, and staying aligned with industry trends.",
        "how does aps panagarh ensure effective communication within the organization":"aps panagarh ensures effective communication through regular meetings, clear internal communication channels, and feedback mechanisms. The organization promotes an open-door policy to facilitate dialogue between management and staff and ensure that information is shared efficiently.",
        "what role does aps panagarh play in emergency response and preparedness":"aps panagarh plays a vital role in emergency response and preparedness by developing and implementing contingency plans, conducting regular drills, and coordinating with relevant authorities to ensure readiness for any unforeseen events or crises.",
        "how does aps panagarh manage and mitigate operational risks":"aps panagarh manages and mitigates operational risks through risk assessment procedures, implementing robust safety and security measures, and conducting regular reviews of risk management strategies. The organization also fosters a risk-aware culture among its employees.",
        "what are aps panagarh’s goals for the next five years":"aps panagarh’s goals for the next five years include expanding its operational capabilities, integrating cutting-edge technologies, enhancing employee development programs, and strengthening its position in the defense sector through strategic growth initiatives.",
        "how does aps panagarh evaluate and improve its customer service":"aps panagarh evaluates and improves customer service by gathering feedback from clients, monitoring service performance metrics, and implementing improvements based on customer insights. The organization focuses on delivering high-quality service and ensuring client satisfaction."
    };

    const sendMessage = (message, isUser = true) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(isUser ? 'user' : 'bot');
        messageElement.innerHTML = `<p>${message}</p>`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    };

    const getBotResponse = (message) => {
        // Convert message to lowercase to match the patterns
        const lowerCaseMessage = message.toLowerCase();
        return responses[lowerCaseMessage] || responses["default"];
    };

    sendBtn.addEventListener('click', () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            sendMessage(userMessage);
            userInput.value = '';
            const botResponse = getBotResponse(userMessage);
            setTimeout(() => sendMessage(botResponse, false), 500);
        }
    });

    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendBtn.click();
        }
    });
});

