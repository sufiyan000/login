const AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: 'AKIA3XTKELXU6EAYUJHQ',
    secretAccessKey: 'neFlRByCcfTXxDso9KeHc25kELTOOv0sl0r9SFeF',
    region: 'ap-south-1', // e.g., us-east-1
});
const ses = new AWS.SES({ apiVersion: '2010-12-01' });
const emailSender =  (emailaddress,emailsubject,emailcontent)=>{
    const params = {
        Destination: {
            ToAddresses: [emailaddress], // Replace with the recipient's email address
        },
        Message: {
            Body: {
                Text: {
                    Data: emailcontent,
                },
            },
            Subject: {
                Data: emailsubject,
            },
        },
        Source: 'sufiyanakhtar69@gmail.com', // Replace with your verified SES email address
    };
    var msg = "";
     ses.sendEmail(params, (err, data) => {
        if (err) {
            msg = "error sending";
            // console.error('Error sending email:', err);
        } else {
            // console.log("sending success world");
            // debugger;
            // return "sending success";
            msg = "sending success";
            // console.log('Email sent:', data);
        }
    });
    
    console.log(msg);

}

module.exports = {emailSender};