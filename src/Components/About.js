import { useCallback, useState } from "react";
// import { AsyncAPIClient } from '@mailchimp/mailchimp_marketing';
import { MailchimpMarketing } from '@mailchimp/mailchimp_marketing';
import CopyComponent from "./CopyComponent";
import Testimonial from "./Testimonial";
import "../css/About.css";

import sec from "../photos/sec.png"
import first from "../photos/first.png"
import avatar1 from "../photos/avatar1.png"
import yes from "../photos/yes.png"
import icon from "../photos/Icon.png"





const About = () => {
    const [showWaitlistForm, setShowWaitlistForm] = useState(false);
    const [email, setEmail] = useState("");

    const handleJoinWaitlistClick = () => {
        console.log("andar to aa rha h...");
        setShowWaitlistForm(true);
        console.log(showWaitlistForm);
        const joinWaitlistFormSection = document.getElementById('joinWaitlistFormSection');
        if (joinWaitlistFormSection) {
            joinWaitlistFormSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const onGoogleLoginClick = useCallback(() => {
        window.open("https://myaccount.google.com/");
    }, []);

    const addEmailToMailchimp = async () => {
        try {
            const client = MailchimpMarketing.create();
        client.setConfig({
                apiKey: "e23e1fb9a9ce02ff805a4ca63ee22b3e", 
                server: "us18", 
            });
            await client.lists.addListMember("d6eae59e12", {
                email_address: email,
                status: "subscribed",
            });
            console.log("Email added to Mailchimp audience successfully");
            // You can show a success message to the user here if needed
        } catch (error) {
            console.error("Error adding email to Mailchimp:", error);
            // You can show an error message to the user here if needed
        }
    };

    const handleEmailInputChange = (event) => {
        setEmail(event.target.value);
    };

    // Function to handle clicking on "Continue with Email" button
    const handleContinueWithEmailClick = () => {
        addEmailToMailchimp();
        // You can add additional logic here, like showing a loader or redirecting the user
    };

    return (
        <div className="about">
            <main className="primary-c-t-a-image">
                <section className="typehero-stacked-cta-image-bo">
                    <div className="copy-component">
                        <div className="heading-text">
                            <h1 className="heading">
                                <p className="the">{`The `}</p>
                                <p className="professionals-only">‘Professionals Only’</p>
                                <p className="marketplace">Marketplace</p>
                            </h1>
                            <h3 className="subheading">Direct, Trusted, Hassle-Free</h3>
                        </div>
                        <button className="cta-button" onClick={handleJoinWaitlistClick}>
                            <div className="text-container">
                                <div className="cta">Join Waitlist</div>
                            </div>
                        </button>
                    </div>
                    <div className="image-container">
                        <img
                            className="image-lummi"
                            loading="lazy"
                            alt=""
                            src={first}
                        />
                    </div>
                </section>
                <section className="typetwo-column-big-image-stat">
                    <div className="wrapper">
                        <div className="text-content">
                            <h1 className="benefit-heading">Empowering Exchange</h1>
                            <h1 className="description">
                                We're revolutionizing corporate transactions by providing direct
                                access to a trusted network of professionals.
                            </h1>
                        </div>
                        <img
                            className="mission-image-lummi"
                            loading="lazy"
                            alt=""
                            src={sec}
                        />
                    </div>
                </section>
                <section className="typesimple-text-cards">
                    <div className="content">
                        <div className="heading-container">
                            <h1 className="one-word-heading">Cost Savings</h1>
                            <h3 className="short-catchy-heading">
                                Reduce expenses with no middleman.
                            </h3>
                        </div>
                        <div className="feature-grid">
                            <div className="feature">
                                <div className="feature-title">Enhanced Trust</div>
                                <div className="feature-description">
                                    Rely on a secure platform vetted for professionals.
                                </div>
                            </div>
                            <div className="feature1">
                                <div className="feature-title1">Exclusive Access</div>
                                <div className="feature-description1">
                                    Gain entry to a curated marketplace for corporate employees.
                                </div>
                            </div>
                            <div className="feature2">
                                <div className="feature-title2">Seamless Experience</div>
                                <div className="feature-description2">
                                    Enjoy a user-friendly platform optimized for your needs.
                                </div>
                            </div>
                            <div className="feature3">
                                <div className="feature-title3">Time Efficiency</div>
                                <div className="feature-description3">
                                    Streamline your deals with swift, direct exchanges.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="property-1big-numbers-just-te">
                    <div className="container">
                        <h1 className="heading1">How CorpoSale Works</h1>
                        <CopyComponent
                            heading="1"
                            subheading="Create An Account"
                            subheading1="Sign up with your corporate email to join and start engaging with the community."
                        />
                        <CopyComponent
                            heading="2"
                            subheading="Post or Browse"
                            subheading1="Post items for sale or browse listings from your corporate peers."
                            propLineHeight="31px"
                        />
                        <div className="copy-component1">
                            <div className="heading2">3</div>
                            <div className="item-text">
                                <div className="subheading1">Safe Transaction</div>
                                <h3 className="subheading2">
                                    Engage in transactions with confidence and efficiency.
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="property-1testimonials-3x2-ca-wrapper">
                    <section className="property-1testimonials-3x2-ca">
                        <div className="heading-container1">
                            <h1 className="heading3">Our User’s Voices</h1>
                            <h3 className="subheading3">
                                Hear from our satisfied professional member
                            </h3>
                        </div>
                        <div className="testimonials-grid">
                            <Testimonial
                                shortTestimonial={`“I was able to trust Sumit and his car that he loved like a child all these years, He sold it to me on a very reasonable price , I saved on the brokerage too and moreover Sumit treated me very nicely and shared all required info and docs, Thank you CorpoSale!."`}
                                imageLummiCategoryavatars={avatar1}
                                name1="Naina Saini"
                                icon="stars"
                            // icon1="/icon.svg"
                            // icon2="/icon.svg"
                            // icon3="/icon-3.svg"
                            // icon4="/icon-4.svg"
                            />
                            <Testimonial
                                shortTestimonial={`"I wanted an additional TV for our bedroom and someone from my own company was selling it as they were moving onsite. It was a steal deal given the price they were quoting! I brought it to my home within 2 hours of my first message. 100% Trust as the other person was an IT professional too."`}
                                imageLummiCategoryavatars={avatar1}
                                name1="Harsh Jain"
                                icon="/icon-5.svg"
                                icon1="/icon-6.svg"
                                icon2="/icon-7.svg"
                                icon3="/icon-8.svg"
                                icon4="/icon-9.svg"
                                propPadding="32px"
                                propPadding1="unset"
                                propAlignSelf="stretch"
                                propDisplay="unset"
                                propMinWidth="unset"
                            />
                            <Testimonial
                                shortTestimonial={`"CorpoSale truly exceeded my expectations! When I needed to upgrade my apartment furniture, I found a perfect match listed by a fellow corporate colleague. The transaction was smooth, and I saved both time and money. Plus, the seller was incredibly helpful and transparent throughout the process. Thank you, CorpoSale, for connecting us!."`}
                                imageLummiCategoryavatars={avatar1}
                                name1="Samarth Maheshwari"
                                icon="/icon-10.svg"
                                icon1="/icon-11.svg"
                                icon2="/icon-12.svg"
                                icon3="/icon-13.svg"
                                icon4="/icon-14.svg"
                                propPadding="32px"
                                propPadding1="unset"
                                propAlignSelf="stretch"
                                propDisplay="unset"
                                propMinWidth="unset"
                            />
                            <Testimonial
                                shortTestimonial={`"What a fantastic experience with CorpoSale! I recently relocated and needed a bicycle for my son. Thanks to this platform, I found a high-quality kids' bike listed by another corporate professional. Not only did I score a great deal, but I also felt confident in the transaction knowing I was dealing directly with a trusted peer. Kudos to CorpoSale for making it happen!."`}
                                imageLummiCategoryavatars={avatar1}
                                name1="Ekta Arora"
                                icon="/icon-15.svg"
                                icon1="/icon-16.svg"
                                icon2="/icon-17.svg"
                                icon3="/icon-18.svg"
                                icon4="/icon-19.svg"
                                propPadding="32px"
                                propPadding1="unset"
                                propAlignSelf="stretch"
                                propDisplay="unset"
                                propMinWidth="unset"
                            />
                            <Testimonial
                                shortTestimonial={`"I'm thrilled with my recent purchase through CorpoSale! As a busy corporate employee, I value efficiency and trust when it comes to buying and selling items. Thanks to this platform, I was able to find a reliable seller for my new apartment's furnishings. The process was seamless, and I even enjoyed networking with a fellow colleague. Highly recommend CorpoSale for hassle-free transactions!."`}
                                imageLummiCategoryavatars={avatar1}
                                name1="Ishan Aapan"
                                icon="/icon-20.svg"
                                icon1="/icon-21.svg"
                                icon2="/icon-22.svg"
                                icon3="/icon-23.svg"
                                icon4="/icon-24.svg"
                                propPadding="32px"
                                propPadding1="unset"
                                propAlignSelf="stretch"
                                propDisplay="unset"
                                propMinWidth="unset"
                            />
                            <Testimonial
                                shortTestimonial={`"CorpoSale is a game-changer for corporate professionals like myself! When I needed to sell my car, I turned to this platform and found a buyer who appreciated its value just as much as I did. Not only did I receive a fair price, but I also enjoyed interacting with a like-minded individual. Thanks to CorpoSale, I was able to sell my car with ease and confidence. Truly grateful for this innovative marketplace!."`}
                                imageLummiCategoryavatars={avatar1}
                                name1="Harshit Goyal"
                                icon="/icon-25.svg"
                                icon1="/icon-26.svg"
                                icon2="/icon-27.svg"
                                icon3="/icon-28.svg"
                                icon4="/icon-29.svg"
                                propPadding="32px"
                                propPadding1="0px 157px 0px 0px"
                                propAlignSelf="unset"
                                propDisplay="inline-block"
                                propMinWidth="90px"
                            />
                        </div>
                    </section>
                </section>
                {/* <section className="property-1simple-centered-sig-wrapper"> */}
                <section id="joinWaitlistFormSection" className="property-1simple-centered-sig-wrapper">
                    {showWaitlistForm && (
                        <div className="property-1simple-centered-sig">
                            <div className="sign-up-container">
                                <div className="copy-component2">
                                    <img
                                        className="image-lummi-categoryavat"
                                        loading="lazy"
                                        alt=""
                                        src={yes}
                                    />
                                    <div className="frame-parent">
                                        <div className="sign-up-heading-parent">
                                            <h1 className="sign-up-heading">Join Waitlist</h1>
                                            <div className="subheading-wrapper">
                                                <div className="subheading4">
                                                    We’ll verify your email and genuineness of your
                                                    corporate status.
                                                </div>
                                            </div>
                                            <button
                                                className="google-login"
                                                onClick={onGoogleLoginClick}
                                            >
                                                <img
                                                    className="google-icon"
                                                    alt=""
                                                    src="/google-icon.svg"
                                                />
                                                <div className="continue-with-google">
                                                    Continue with LinkedIn
                                                </div>
                                            </button>
                                        </div>
                                        <div className="frame-group">
                                            <div className="line-wrapper">
                                                <div className="line" />
                                            </div>
                                            <div className="or">or</div>
                                            <div className="line-container">
                                                <div className="line1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form">
                                        <div className="input">
                                            <div className="label">Email Address</div>
                                            <div className="input-form">
                                                <input
                                                    className="text-container1"
                                                    placeholder="Enter your email"
                                                    type="text"
                                                    value={email}
                                                    onChange={handleEmailInputChange}
                                                />
                                            </div>
                                        </div>
                                        <button className="button" onClick={handleContinueWithEmailClick}>
                                            <div className="text-container2">
                                                <div className="cta1">Continue with Email</div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="by-continuing-you">
                                        By signing up you accept our Terms and Privacy
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
                <section className="bubble-container-wrapper">
                    <footer className="bubble-container">
                        <div className="content1">
                            <div className="brand">
                                <div className="logo">
                                    <img
                                        className="icon"
                                        loading="lazy"
                                        alt=""
                                        src={icon}
                                    />
                                    <div className="brandname">DirectDeal</div>
                                </div>
                                <div className="slogan">Empowering Professionals</div>
                            </div>
                            <div className="links">
                                <div className="list">
                                    <div className="list-heading">Company</div>
                                    <div className="list-link-item">About</div>
                                    <div className="list-link-item1">Careers</div>
                                    <div className="list-link-item2">Newsroom</div>
                                </div>
                                <div className="list1">
                                    <div className="list-heading1">Platform Perks</div>
                                    <div className="list-link-item3">Efficiency</div>
                                    <div className="list-link-item4">Selection</div>
                                    <div className="list-link-item5">Updates</div>
                                </div>
                                <div className="list2">
                                    <div className="list-heading2">Social</div>
                                    <div className="list-link-item6">Twitter</div>
                                    <div className="list-link-item7">Instagram</div>
                                    <div className="list-link-item8">Threads</div>
                                </div>
                            </div>
                        </div>
                        <div className="divider" /> 
                        <div className="legals">
                            <div className="copyright-wrapper">
                                <div className="copyright">© DirectDeal 2024</div>
                            </div>
                            <div className="list-link-item-parent">
                                <div className="list-link-item9">{`T&C's`}</div>
                                <div className="list-link-item10">Privacy Policy</div>
                            </div>
                        </div>
                    </footer>
                </section>
            </main>
        </div>
    )
}
export default About