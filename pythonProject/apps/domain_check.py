import whois

def check_domain_availability(domain_name):
    try:
        w = whois.whois(domain_name)
        if w.status is None:
            return "Available"
        else:
            return "Already taken"
    except Exception as er:
        return "Available"



# Call the function to check the availability of the domain name
# domain_name = "unboxfame.com"
# check_domain_availability(domain_name)
