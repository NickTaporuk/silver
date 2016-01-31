#!/usr/bin/python
import pexpect
import getpass
import sys
command = sys.argv[1]
print command
password = getpass.getpass()
IP_list = open('/var/www/silver/deploy/ip_addresses.txt')
IP = IP_list.readline()
while IP:
    print IP
    cli="ssh nick@%s %s" % (IP,command)
    exp = pexpect.spawn(cli)
    exp.expect('password:')
    exp.sendline(password)
    exp.expect(pexpect.EOF)
    print exp.before
    IP = IP_list.readline()
IP_list.close()