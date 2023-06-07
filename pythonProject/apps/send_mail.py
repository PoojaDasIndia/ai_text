import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from core import logger

logger = logger.create_logger("receive_mail")


def send_email(receiver_email, subject, body):
    # sender_email = "info@unboxfame.us"
    # password = 'R13-@-y}^NF,'
    sender_email = 'pooja.das@unboxfame.com'
    password = 'Poojadas@123'

    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email
    message["Subject"] = subject

    message.attach(MIMEText(body, 'html'))

    try:
        server = smtplib.SMTP_SSL("mail.unboxfame.us", 465)  # Set SMTP server and port
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, message.as_string())
        logger.info("Email sent successfully!")
    except Exception as e:
        logger.exception(e)
        logger.info("Failed to send email.")
    finally:
        server.quit()

# receiver_email = "pooja.das@unboxfame.com"
# subject = 'Thank you for filling out the form'
# message = f"""Thank You pooja
#                   Thank you for going to the customized brand name for your business. We can assure you that you are in the right direction. We hope you will be satisfied with the names given by our brand naming experts."""
#
# send_email(receiver_email, subject, message)
