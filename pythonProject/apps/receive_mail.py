import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from core import logger

logger = logger.create_logger("receive_mail")


def receive(receiver_email, body):

    # sender_email = "info@unboxfame.us"
    # sender_email='pooja.das@unboxfame.com'
    # password = 'R13-@-y}^NF,'
    # password='Poojadas@123'
    sender_email = "Poojadas2014.pd@gmail.com"
    password = 'eiyzdixtjemkacoh'

    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email
    message["Subject"] = "New form is fill up"

    message.attach(MIMEText(body, "html"))

    try:
        server = smtplib.SMTP_SSL("mail.unboxfame.us", 465)  # Set SMTP server and port
        # server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, message.as_string())
        logger.info("Email send to admin")
        logger.info( "Email sent successfully!")
    except Exception as e:
        logger.exception(e)
        logger.info("Failed to send email.")

    finally:
        server.quit()


# receiver_email = "pooja.das@unboxfame.com"
# body = "texting"
# print(receive(receiver_email, body))
