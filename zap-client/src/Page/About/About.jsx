import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const About = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl pt-4 font-bold px-4">About Us</h1>
            <p className="px-4 w-1/2 text-gray-700">
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
            </p>
            <div className="border my-8 border-gray-200"></div>
            <div className="my-8">
                <Tabs>
                    <TabList>
                        <Tab>Story</Tab>
                        <Tab>Mission</Tab>
                        <Tab>Success</Tab>
                        <Tab>Team & Others</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className='text-gray-500 my-2'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</h2>
                        <h2 className='text-gray-500 my-2'>
                            We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                        </h2>
                        <h2 className='text-gray-500 my-2'>
                            We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                        </h2>
                        <h2 className='text-gray-500 my-2'>
                            We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                        </h2>
                        <h1 className='text-gray-500 my-2'>
                            We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                        </h1>

                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-gray-500 my-2'>
                            Our mission is to revolutionize parcel delivery by providing fast, reliable, and hassle-free service. We are committed to leveraging technology for real-time tracking, optimizing logistics for efficiency, and prioritizing customer satisfaction. Our goal is to be the go-to choice for individuals and businesses alike, ensuring every package reaches its destination on time, every time.
                        </h2>
                        <h2 className='text-gray-500 my-2'>
                            Our mission is to revolutionize parcel delivery by providing fast, reliable, and hassle-free service. We are committed to leveraging technology for real-time tracking, optimizing logistics for efficiency, and prioritizing customer satisfaction. Our goal is to be the go-to choice for individuals and businesses alike, ensuring every package reaches its destination on time, every time.
                        </h2>
                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-gray-500 my-2'>
                            Since our inception, we've achieved significant milestones, including expanding our delivery network to cover over 95% of the country, maintaining a 99.9% on-time delivery rate, and receiving numerous industry awards for innovation and customer service. Our success is a testament to our dedicated team and loyal customers who have supported us every step of the way.
                        </h2>
                        <h2 className='text-gray-500 my-2'>
                            Since our inception, we've achieved significant milestones, including expanding our delivery network to cover over 95% of the country, maintaining a 99.9% on-time delivery rate, and receiving numerous industry awards for innovation and customer service. Our success is a testament to our dedicated team and loyal customers who have supported us every step of the way.
                        </h2>
                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-gray-500 my-2'>
                            Our team is made up of passionate individuals who are dedicated to providing exceptional service. From our customer support representatives to our logistics experts, every member of our team plays a crucial role in ensuring that our customers receive the best possible experience. We value diversity, innovation, and collaboration, and we are committed to fostering a positive work environment where everyone can thrive.
                        </h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default About;