// C program to recognize strings under ‘a*’, ‘a*b+’, ‘abb’
// input: aaabbbb
// LOGIC: By using transition diagram we verify input of the state. If the state recognize the given pattern rule. Then print string is accepted under a*/ a*b+/ abb. Else print string not accepted.

#include <stdio.h>
#include <math.h>
#include <ctype.h>
#include <string.h>
#include <stdlib.h>
#include <conio.h>

void main()
{
    char s[20], c;
    int state = 0, i = 0;

    printf("\n Enter a string:");
    scanf("%s", &s);
    while (s[i] != '\0')
    {
        switch (state)
        {
        case 0:
            c = s[i++];
            if (c == 'a')
                state = 1;
            else if (c == 'b')
                state = 2;
            else
                state = 6;
            break;
        case 1:
            c = s[i++];
            if (c == 'a')
                state = 3;
            else if (c == 'b')
                state = 4;
            else
                state = 6;
            break;
        case 2:
            c = s[i++];
            if (c == 'a')
                state = 6;
            else if (c == 'b')
                state = 2;
            else
                state = 6;
            break;
        case 3:
            c = s[i++];
            if (c == 'a')
                state = 3;
            else if (c == 'b')
                state = 2;
            else
                state = 6;
            break;
        case 4:
            c = s[i++];
            if (c == 'a')
                state = 6;
            else if (c == 'b')
                state = 5;
            else
                state = 6;
            break;
        case 5:
            c = s[i++];
            if (c == 'a')
                state = 6;
            else if (c == 'b')
                state = 2;
            else
                state = 6;
            break;
        case 6:
            printf("\n %s is not recognised.", s);
        }
    }
    if (state == 1)
        printf("\n %s is accepted under rule 'a'", s);
    else if ((state == 2) || (state == 4))
        printf("\n %s is accepted under rule 'a*b+'", s);
    else if (state == 5)
        printf("\n %s is accepted under rule 'abb'", s);
    getch();
}