// A C program for checking whether a given line is a comment

#include <stdio.h>
#include <math.h>
#include <ctype.h>
#include <string.h>
#include <stdlib.h>
#include <conio.h>
void main()
{
    char com[30];
    int i = 2, a = 0;

    printf("\n Enter comment:");
    scanf("%s", com);
    if (com[0] == '/')
    {
        if (com[1] == '/')
            printf("\n It is a comment");
        else if (com[1] == '*')
        {
            for (i = 2; i <= 30; i++)
            {
                if (com[i] == '*' && com[i + 1] == '/')
                {
                    printf("\n It is a comment");
                    a = 1;
                    break;
                }
                else
                    continue;
            }
            if (a == 0)
                printf("\n It is not a comment");
        }
        else
            printf("\n It is not a comment");
    }
    else
        printf("\n It is not a comment");
    getch();
}