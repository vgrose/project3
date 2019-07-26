import csv

with open('data/top_aesop.csv', mode='r') as infile:
    reader = csv.reader(infile)
    with open('data/top_aesop_new.csv', mode='w') as outfile:
        writer = csv.writer(outfile)
        mydict = {rows[0]:rows[1] for rows in reader}
    print(mydict)