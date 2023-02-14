#include <stdio.h>

int main(){
    float voto,cfu,sommacrediti=0,numeratore=0;
    int i,x;
    float media;
    printf("Quanti voti hai?\n");
    scanf("%d",&x);
    for(i=0;i<x;i++){
        printf("Inserisci voto:\n");
        scanf("%f",&voto);
        printf("Quanti crediti sono?\n");
        scanf("%f",&cfu);
        numeratore+=voto*cfu;
        sommacrediti+=cfu;
    }
    media=numeratore/sommacrediti;
    printf("La tua media è: %f\n",media);
    return 0;
}
