// C program to test whether a given identifier is valid or not

#include <string.h>
#include <ctype.h>
#include <stdio.h>
#include <conio.h>

void main()

{

char a[10];

int flag, i=1;

printf("\n Enter an identifier:");

scanf("%s",a);

if(isalpha(a[0]))

flag=1;

else

printf("\n Not a valid identifier");

while(a[i]!='\0')

{

if(!isdigit(a[i])&&!isalpha(a[i]))

{

flag=0;

break;

}

i++;

}

if(flag==1)

printf("\n Valid identifier");

getch();

}