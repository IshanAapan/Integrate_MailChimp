// import logo from './logo.svg';
// import './App.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import About from "./Components/About";


function App() {
  return (
    <div className="App">
      <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} render={({ subscribe, status, message }) => (
        <About status={status} message={message} onValidated={formData => subscribe(formData)} />
      )}
      />
    </div>
  );
}

export default App;
