// Question: Write a C program to test whether a given identifier is valid or not
#include<stdio.h>
#include<ctype.h>
int main() {
    char a[10];
    int flag, i=1;
    printf("\n Enter an identifier:");
    gets(a);
    if(isalpha(a[0])) {
        flag=1;
    } else {
        printf("\n Not a valid identifier");
    }
    while(a[i]!='\0') {
        if(!isdigit(a[i])&&!isalpha(a[i])) {
            flag=0;
            break;
        }
        i++;
    }
    if(flag==1) {
        printf("\n Valid identifier");
    }
    return 0;
}
/*
Input: Enter an identifier: first
Output: Valid identifier

Input: Enter an identifier:1aqw1
Output: Not a valid identifier
*/