#include <stdio.h>

int main(int argc, char **argv) {
  if (argc > 1) printf("There are %d arguments provided.\n", argc);
  else printf("There is 1 argument provided.\n");

  printf("\nThey are as follows:\n");
  for (int i = 0; i < argc; i++) {
    printf("%d: %s\n", i + 1, argv[i]);
  }

  return 0; 
}
