import os
import win32com.client as win32
import tkinter as tk
#from tkinter import *
from tkinter import Label
from tkinter import Entry
from tkinter import messagebox
from tkinter import Button 
from tkinter import PhotoImage
import pandas as pd
import csv





   

root=tk.Tk()



width, height = root.winfo_screenwidth, root.winfo_screenheight

root.geometry("{0}x{1}+0+0".format(400, 800))
#root.resizable(0, 0)

l=2
w= 300
root.wm_title("PERCENTAGE PASS AND FAILED")
root.wm_iconbitmap('001.ico')
noun_img= PhotoImage(file='noun2.png')
l0=Label(root, image=noun_img)
l0.grid(row=l,column=0,pady= (0, 0),columnspan=5,padx=(10,0))




L1=Label(root,text="        ")
L1.grid(row=l-1,column=0,padx= (0, 0)  )

l2=Label(root,text="COMPUTE PASSED AND FAILED", font='Helvetica 18 bold')
l2.grid(row=l+0,column=0,columnspan=4,padx= (0, 0),pady= (w, 0))

l3=Label(root,text="        ")
l3.grid(row=l+0,column=2)


l4=Label(root,text="NAME OF FILE:")
l4.grid(row=l+2,column=0,padx= (0, 0),pady= (w-250, 0))





l7=Label(root,text="NAME OF SHEET:")
l7.grid(row=l+3,column=0, padx= (0, 0), pady= (w-250, 0))



l9=Label(root,text="        ")
l9.grid(row=l+2,column=2)

l41=Label(root,text="   ")
l41.grid(row=l+6,column=1)

l51=Label(root,text="    ",fg="#0000FF", font='times 10 bold')
l51.grid(row=l+8,column=0,padx= (0, 0),columnspan=4, pady= (50,0))




e1=Entry(root, width= 45, bg="#00FF00")

e1.grid(row=l+2,column=1,pady= (w-250, 0))
e1.get()  




e2=Entry(root, width= 45, bg="#00FF00")

e2.grid(row=l+3,column=1,pady= (w-250, 0))
e2.get()  




def run():
    
    
    
    ReN=e1.get()
    
    
    
    ReD=e2.get()
    

    if ReD =="" or ReN=="":
            
        
        
        messagebox.showwarning("ERROR", "AN ENTRY IS EMPTY!")
        return 2
    

    
    xl = win32.Dispatch('Excel.Application')


    


    try:
        df = pd.read_csv(ReN+'.csv')
                    
    except Exception:
        messagebox.showwarning("ERROR", "FILE NOT FOUND")
        
        return "File not Found"

     
     
     

    n=2
    y=[]
    y1=[]
        
    n1=-1
    
    le=1
    L1=0
    L1a=0
    L1b=0
    L1c=0
    L1d=0
    L1e=0
    L1p=0
    L1f=0
    L2=0
    L2a=0
    L2b=0
    L2c=0
    L2d=0
    L2e=0
    L2p=0
    L2f=0
    L3=0
    L3a=0
    L3b=0
    L3c=0
    L3d=0
    L3e=0
    L3p=0
    L3f=0
    L4=0
    L4a=0
    L4b=0
    L4c=0
    L4d=0
    L4e=0
    L4p=0
    L4f=0

   

    L2=0
    L2a=0
    L2b=0
    L2c=0
    L2d=0
    L2e=0
    L2p=0
    L2f=0
    L3=0
    L3a=0
    L3b=0
    L3c=0
    L3d=0
    L3e=0
    L3p=0
    L3f=0
    L4=0
    L4a=0
    L4b=0
    L4c=0
    L4d=0
    L4e=0
    L4p=0
    L4f=0
    
    
    
    while n< int(ReD):
       
        
        
        if str(df.iloc[n, 4])[3]=='1':
            L1+=1

            
            if str(df.iloc[n, 7]) == "F" or str(df.iloc[n, 7]) == "I":
                L1f+=1
            else:
                
                if str(df.iloc[n, 7]) == "A":
                    L1p+=1
                    L1a+=1
                elif str(df.iloc[n, 7]) == "B":
                    L1p+=1
                    L1b+=1
                elif str(df.iloc[n, 7]) == "C":
                    L1p+=1
                    L1c+=1
                elif str(df.iloc[n, 7]) == "D":
                    L1p+=1
                    L1d+=1
                elif str(df.iloc[n, 7]) == "E":
                    L1p+=1
                    L1e+=1
        elif str(df.iloc[n,4])[3]=='2':
            le=2
            
            L2+=1
            if str(df.iloc[n, 7]) == "F" or str(df.iloc[n, 7]) == "I":
                L2f+=1
            else:
                
                if str(df.iloc[n, 7]) == "A":
                    L2p+=1
                    L2a+=1
                elif str(df.iloc[n, 7]) == "B":
                    L2p+=1
                    L2b+=1
                elif str(df.iloc[n, 7]) == "C":
                    L2p+=1
                    L2c+=1
                elif str(df.iloc[n, 7]) == "D":
                    L2p+=1
                    L2d+=1
                elif str(df.iloc[n, 7]) == "E":
                    L2p+=1
                    L2e+=1
        elif str(df.iloc[n,4])[3]=='3':
            le=3
            
            L3+=1

            if str(df.iloc[n, 7]) == "F" or  str(df.iloc[n, 7]) == "I":
                L3f+=1
            else:
                
                if str(df.iloc[n, 7]) == "A":
                    L3p+=1
                    L3a+=1
                elif str(df.iloc[n, 7]) == "B":
                    L3p+=1
                    L3b+=1
                elif str(df.iloc[n, 7]) == "C":
                    L3p+=1
                    L3c+=1
                elif str(df.iloc[n, 7]) == "D":
                    L3p+=1
                    L3d+=1
                elif str(df.iloc[n, 7]) == "E":
                    L3p+=1
                    L3e+=3
        elif str(df.iloc[n,4])[3]=='4':
            le=4
            
            L4+=1

            if str(df.iloc[n, 7]) == "F" or str(df.iloc[n, 7]) == "I":
                L4f+=1
            else:
                
                if str(df.iloc[n, 7]) == "A":
                    L4p+=1
                    L4a+=1
                elif str(df.iloc[n, 7]) == "B":
                    L4p+=1
                    L4b+=1
                elif str(df.iloc[n, 7]) == "C":
                    L4p+=1
                    L4c+=1
                elif str(df.iloc[n, 7]) == "D":
                    L4p+=1
                    L4d+=1
                elif str(df.iloc[n, 7]) == "E":
                    L4p+=1
                    L4e+=1
        

        
        if str(df.iloc[n,4]) not in y1:
            
            s=["",0,0,0,0,0,0,0,0]
            s[0]=str(df.iloc[n,4]) 
            
            y1.append(str(df.iloc[n,4]))
            if str(df.iloc[n, 7]) == "F":
                s[1]+=1
            else:
                if str(df.iloc[n, 7]) == "A":
                    s[3]+=1
                    s[2]+=1
                elif str(df.iloc[n, 7]) == "B":
                   s[4]+=1
                   s[2]+=1
                elif str(df.iloc[n, 7]) == "C":
                    s[5]+=1
                    s[2]+=1
                elif str(df.iloc[n, 7]) == "D":
                    s[6]+=1
                    s[2]+=1
                elif str(df.iloc[n, 7]) == "E":
                    s[7]+=1
                    s[2]+=1
                elif str(df.iloc[n, 7]) == "I":
                    s[8]+=1
                    


                
            y.append(s)
            
            n1+=1
        else:
            j1=y1.index(str(df.iloc[n,4]))
            if str(df.iloc[n, 7]) == "F" :
                y[j1][1]+=1
            else:
                
                if str(df.iloc[n, 7]) == "A":
                    y[j1][3]+=1
                    y[j1][2]+=1
                elif str(df.iloc[n, 7]) == "B":
                   y[j1][4]+=1
                   y[j1][2]+=1
                elif str(df.iloc[n, 7]) == "C":
                    y[j1][5]+=1
                    y[j1][2]+=1
                elif str(df.iloc[n, 7]) == "D":
                    y[j1][6]+=1
                    y[j1][2]+=1
                elif str(df.iloc[n, 7]) == "E":
                    y[j1][7]+=1
                    y[j1][2]+=1
                elif str(df.iloc[n, 7]) == "I":
                    y[j1][8]+=1
                    
            n1+=1
            #print(y)
        n+=1      

    def per(a,b):

        pe=(a/b)*100
        return pe

    print(L2p)

    xl.Visible = True

    wb = xl.Workbooks.Open(os.path.join(os.getcwd(), ReN+'.xlsx'))


    wb.Sheets.Add().Name="analysis"
    ws_sheet2 = wb.Worksheets('analysis')
    ws_sheet2.Cells(3, 1).value="Level/courses"
    ws_sheet2.Cells(3, 2).value="100L"
    ws_sheet2.Cells(3, 3).value="200L"
    ws_sheet2.Cells(3, 4).value="300L"
    ws_sheet2.Cells(3, 5).value="400L"
    for i in range(1,6):
        ws_sheet2.Cells(3, i ).Font.color = 32768



    
    
    ws_sheet2.Cells(4, 1).value="%A"
    ws_sheet2.Cells(5, 1).value="%B"
    ws_sheet2.Cells(6, 1).value="%C"
    ws_sheet2.Cells(7, 1).value="%D"
    ws_sheet2.Cells(8, 1).value="%E"
    ws_sheet2.Cells(9, 1).value="%F"
    ws_sheet2.Cells(10, 1).value="%Pass"
    ws_sheet2.Cells(11, 1).value="%I"
    
    ws_sheet2.Cells(12, 1).value="Num of A"
    ws_sheet2.Cells(13, 1).value="Num of B"
    ws_sheet2.Cells(14, 1).value="Num of C"
    ws_sheet2.Cells(15, 1).value="Num of D"
    ws_sheet2.Cells(16, 1).value="Num of E"
    ws_sheet2.Cells(17, 1).value="Num of F"
    ws_sheet2.Cells(18, 1).value="Num of Pass"
    ws_sheet2.Cells(19, 1).value="Num of I"

   
    
    
    for i in range(4,8):
        ws_sheet2.Cells(i, 1).Font.color = 32768

    def cou(y):
        
        for i in range(len(y)):
            ws_sheet2.Cells(3, 6+i).value=str(y[i][0])
            ws_sheet2.Cells(3, 6+i).Font.color = 32768
            ws_sheet2.Cells(4, 6+i).value=str(per(y[i][3],y[i][2]+y[i][1]+y[i][8]))
            ws_sheet2.Cells(5, 6+i).value=str(per(y[i][4],y[i][2]+y[i][1]+y[i][8]))
            ws_sheet2.Cells(6, 6+i).value=str(per(y[i][5],y[i][2]+y[i][1]+y[i][8]))
            ws_sheet2.Cells(7, 6+i).value=str(per(y[i][6],y[i][2]+y[i][1]+y[i][8]))
            ws_sheet2.Cells(8, 6+i).value=str(per(y[i][7],y[i][2]+y[i][1]+y[i][8]))
            ws_sheet2.Cells(9, 6+i).value=str(per(y[i][1],y[i][2]+y[i][1]+y[i][8]))
            ws_sheet2.Cells(10, 6+i).value=str(per(y[i][2],y[i][2]+y[i][1]+y[i][8]))
            ws_sheet2.Cells(11, 6+i).value=str(per(y[i][8],y[i][2]+y[i][1]+y[i][8]))
            
            
            ws_sheet2.Cells(12, 6+i).value=str(y[i][3])
            ws_sheet2.Cells(13, 6+i).value=str(y[i][4])
            ws_sheet2.Cells(14, 6+i).value=str(y[i][5])
            ws_sheet2.Cells(15, 6+i).value=str(y[i][6])
            ws_sheet2.Cells(16, 6+i).value=str(y[i][7])
            ws_sheet2.Cells(17, 6+i).value=str(y[i][1])
            ws_sheet2.Cells(18, 6+i).value=str(y[i][2])
            ws_sheet2.Cells(19, 6+i).value=str(y[i][8])
            
            
            
            

        
    
    
    
    def lev():
        ws_sheet2.Cells(4, 2).value=str(per(L1a,L1))
        ws_sheet2.Cells(5, 2).value=str(per(L1b,L1))
        ws_sheet2.Cells(6, 2).value=str(per(L1c,L1))
        ws_sheet2.Cells(7, 2).value=str(per(L1d,L1))
        ws_sheet2.Cells(8, 2).value=str(per(L1e,L1))
        ws_sheet2.Cells(9,2).value=str(per(L1f,L1))
        ws_sheet2.Cells(10, 2).value=str(per(L1p,L1))
        
        ws_sheet2.Cells(11, 2).value=str(L1a)
        ws_sheet2.Cells(12, 2).value=str(L1b)
        ws_sheet2.Cells(13, 2).value=str(L1c)
        ws_sheet2.Cells(14, 2).value=str(L1d)
        ws_sheet2.Cells(15, 2).value=str(L1e)
        ws_sheet2.Cells(16, 2).value=str(L1f)
        ws_sheet2.Cells(17, 2).value=str(L1p)
        


        ws_sheet2.Cells(4, 3).value=str(per(L2a,L2))
        ws_sheet2.Cells(5, 3).value=str(per(L2b,L2))
        ws_sheet2.Cells(6, 3).value=str(per(L2c,L2))
        ws_sheet2.Cells(7, 3).value=str(per(L2d,L2))
        ws_sheet2.Cells(8, 3).value=str(per(L2e,L2))
        ws_sheet2.Cells(9, 3).value=str(per(L2f,L2))
        ws_sheet2.Cells(10,3).value=str(per(L2p,L2))
        
        ws_sheet2.Cells(11, 3).value=str(L2a)
        ws_sheet2.Cells(12, 3).value=str(L2b)
        ws_sheet2.Cells(13, 3).value=str(L2c)
        ws_sheet2.Cells(14, 3).value=str(L2d)
        ws_sheet2.Cells(15, 3).value=str(L2e)
        ws_sheet2.Cells(16, 3).value=str(L2f)
        ws_sheet2.Cells(17, 3).value=str(L2p)
        


        ws_sheet2.Cells(4, 4).value=str(per(L3a,L3))
        ws_sheet2.Cells(5, 4).value=str(per(L3b,L3))
        ws_sheet2.Cells(6, 4).value=str(per(L3c,L3))
        ws_sheet2.Cells(7, 4).value=str(per(L3d,L3))
        ws_sheet2.Cells(8, 4).value=str(per(L3e,L3))
        ws_sheet2.Cells(9, 4).value=str(per(L3f,L3))
        ws_sheet2.Cells(10,4).value=str(per(L3p,L3))
        
        ws_sheet2.Cells(11, 4).value=str(L3a)
        ws_sheet2.Cells(12, 4).value=str(L3b)
        ws_sheet2.Cells(13, 4).value=str(L3c)
        ws_sheet2.Cells(14, 4).value=str(L3d)
        ws_sheet2.Cells(15, 4).value=str(L3e)
        ws_sheet2.Cells(16, 4).value=str(L3f)
        ws_sheet2.Cells(17, 4).value=str(L3p)

        

        ws_sheet2.Cells(4, 5).value=str(per(L4a,L4))
        ws_sheet2.Cells(5, 5).value=str(per(L4b,L4))
        ws_sheet2.Cells(6, 5).value=str(per(L4c,L4))
        ws_sheet2.Cells(7, 5).value=str(per(L4d,L4))
        ws_sheet2.Cells(8, 5).value=str(per(L4e,L4))
        ws_sheet2.Cells(9, 5).value=str(per(L4f,L4))
        ws_sheet2.Cells(10,5).value=str(per(L4p,L4))

        
        ws_sheet2.Cells(11, 5).value=str(L4a)
        ws_sheet2.Cells(12, 5).value=str(L4b)
        ws_sheet2.Cells(13, 5).value=str(L4c)
        ws_sheet2.Cells(14, 5).value=str(L4d)
        ws_sheet2.Cells(15, 5).value=str(L4e)
        ws_sheet2.Cells(16, 5).value=str(L4f)
        ws_sheet2.Cells(17, 5).value=str(L4p)
    
        
    lev()
    cou(y)

    def chat():
        x=len(y)+5
        rang = ws_sheet2.Range(ws_sheet2.Cells(3,1),ws_sheet2.cells(10,x))
        charts_objects = ws_sheet2.ChartObjects()
        charts_object =  charts_objects.Add(200,100,500,250)

        chart = charts_object.Chart

        chart.SetSourceData(rang,1)
        chart.ChartType = 51
        chart.HasTitle =True

        chart_title =chart.ChartTitle
        chart_title.Text = "Analysis of passed and failed courses"

        chart_title_font= chart_title.Font
        chart_title_font.ColorIndex = 3
        chart_title_font.Bold = True
        
        chart.HasLegend = True
        chart.Legend.Position =-4107
    
    
    
    def save():
        try:
            wb.SaveAs(Filename=os.path.join(os.getcwd(), 'PASSED_List.xlsx'))
            
        except Exception:
            messagebox.showwarning("ERROR", "REMOVE PASSED_List")
            
            return 1  
    

    
    while save()==1:
        save()
    else:
        
        messagebox.showinfo("SUCCESS", "PASSED LIST CREATED")
        
           
        

    

B1=Button(root,text="GENERATE LIST", bg="skyblue", activebackground="green",command=run)
B1.grid(row=l+7,column=0,columnspan=5,padx=(10,0))


root.mainloop()

