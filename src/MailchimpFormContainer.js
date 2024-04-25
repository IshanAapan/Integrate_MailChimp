import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import About from './About';

const MailchimpFormContainer = (props) => {
    const postUrl = `"https://gmail.us18.list-manage.com/subscribe/post"${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <div className="mc__form-container">
            <MailchimpSubscribe url={postUrl}
                render={({ subscribe, status, message }) => (
                    <About
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

export default MailchimpFormContainer;
