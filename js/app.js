var todasPerguntas = ["Q2l0ZSAzICBwZXJzb25hZ2VucyBkbyBDaGF2ZXM=","Q2l0ZSAzIHBlcnNvbmFnZW5zIGRvIENoYXBvbGlu","Q2l0ZSAzIHRpcG9zIGRlIGNhZsOpIGRhIERvbGNlIEd1c3Rv","Q2l0ZSAzIHRpbWVzIGRlIGZ1dGVib2wgZGUgU8OjbyBQYXVsbw==","Q2l0ZSAzIGZlaXRpw6dvcyBkZSBIYXJyeSBQb3R0ZXI=","Q2l0ZSAzIGRpYXMgZGEgc2VtYW5h","Q2l0ZSAzIHp1ZXJhcyBkYSB0ZWNo","Q2l0ZSAzIG1lbmluYXMgZGEgdGVjaA==","Q2l0ZSAzIGZlcm5hbmRvcyBkYSBEUDY=","Q2l0ZSAzIHBlcnNvbmFnZW5zIGRlIFN0YXIgVHJlaw==","Q2l0ZSAzIHNlbnRpbWVudG9zIGJvbnM=","Q2l0ZSAzIGJlYmlkYXMgYWxjw7NvbGljYXM=","Q2l0ZSAzIHBlY2Fkb3MgY2FwaXRhaXM=","Q2l0ZSAzIHBlcnNvbmFnZW5zIGRvIHRveSBzdG9yeQ==","Q2l0ZSAzIHBlcnNvbmFnZW5zIGRlIFN0YXIgVHJlaw==","Q2l0ZSAzIHBlcnNvbmFnZW5zIGRlIFN0YXIgVHJlaw==","Q2l0ZSAzIHByb2Zpc3PDtWVzIHF1ZSB0ZXJtaW5hbSBlbSBlaXJvIChleDogY2FiZWxlaXJlaXJvKQ==","Q2l0ZSAzIERTVHM=","Q2l0ZSAzIG3DqXRvZG9zIGRvIG5wdG1zIChUYWcgTWFuYWdlcik=","Q2l0ZSAzIGhhbWJ1cmd1ZXJpYXM=","Q2l0ZSAzIGFtb3JlcyBkYSBzdWEgdmlkYQ==","Q2l0ZSAzIHBlcnNvbmFnZW5zIGRhIHR1cm1hIGRhIE1vbmljYQ==","Q2l0ZSAzIHNlZ3JlZG9zIGNhYnVsb3Nvcw==","Q2l0ZSAzIG1lbWVz","Q2l0ZSAzIHBlcnNvbmFnZW5zIGRvIERyYWdvbiBiYWxsIFo=","Q2l0ZSAzIG5vdmVsYXMgbWV4aWNhbmFz","Q2l0ZSAzIG5vbWVzIGLDrWJsaWNvcw==","Q2l0ZSAzIHJpc2FkYXMgZW5ncmHDp2FkYXMgZGEgRFA2","Q2l0ZSAzIHNhYm9yZXMgZGUgdGljIHRhYw==","Q2l0ZSAzIHBlc3NvYXMgbWFpcyBsaW5kYXMgZGEgRFA2","Q2l0ZSAzIHBlcnNvbmFnZW5zIGRvIFPDrXRpbyBkbyBQaWNhIFBhdSBBbWFyZWxv","Q2l0ZSAzIHBpYWRhcyBkZSBwb250aW5ob3M=","Q2l0ZSAzIHBpYWRhcyBkZSBwaW50aW5ob3M=","Q2l0ZSAzIHRpcG9zIGRlIGJhbmFuYQ==","Q2l0ZSAzIGZydXRhcw==","Q2l0ZSAzIGJlYmlkYXMgYWxjw7NvbGljYXM=","Q2l0ZSAzIGZpbG1lcyBiYXNlYWRvcyBlbSBsaXZyb3M=","Q2l0ZSAzIGxpbmd1YWdlbnMgZGUgcHJvZ3JhbWHDp8Ojbw==","Q2l0ZSAzIG1lZG9z","Q2l0ZSAzIGRvY2VzIA==","Q2l0ZSAzIHRpcG9zIGRlIGPDom5jZXIg","Q2l0ZSAzIHBlcnNvbmFnZW5zIGRvIHNpdGlvIGRvIHBpY2EgcGF1IGFtYXJlbG8=","Q2l0ZSAzIG5lY2Vzc2lkYWRlcyBiw6FzaWNhcyBkbyBzZXIgaHVtYWRv","Q2l0ZSAzIHBpYWRhcyBkZSB0aW8gZGUgY2h1cnJhc2Nv","Q2l0ZSAzIGZyYXNlcyBwcmluY2lwYWlzIGRhIERQNg==","Q2l0ZSAzIGNsaWVudGVzIGRhIERQNg==","Q2l0ZSAzIHJlZnJpZ2VyYW50ZXM=","Q2l0ZSAzIG1hcmNhcyBkZSBjZWx1bGFy","Q2l0ZSAzIG5vbWVzIG1hc2N1bGlub3MgcXVlIGNvbWVjZW0gY29tIGEgbGV0cmEgQg==","Q2l0ZSAzIG5vbWVzIGZlbWluaW5vcyBxdWUgY29tZWNlbSBjb20gYSBsZXRyYSBU","Q2l0ZSAzIHBlcnNvbmFnZW5zIGRvIFNpdGlvIGRvIFBpY2EgUGF1IEFtYXJlbG8=","Q2l0ZSAzIHRhZ3MgZGUgcGFyY2Vpcm9zIA==","Q2l0ZSAzIGFwZWxpZG9zIGRvIGpvaG5ueQ==","Q2l0ZSAzIGhpc3RvcmlhcyBlbmdyYcOnYWRhcyBkbyByYWo=","Q2l0ZSAzIGRhbsOnYXMgZG8gcGF0aW5p","Q2l0ZSAzIGRpYXMgZGEgc2VtYW5h","Q2l0ZSAzIEJsw6EgYmzDoSBibMOh","Q2l0ZSAzIG3DunNpY2FzIGRvIHJhdWwgc2VpeGFz","Q2l0ZSAzIG3DunNpY2FzIGRvIGFybmFsZG8gYW50dW5lcw==","Q2l0ZSAzIHBlc3NvYXMgcXVlIG1hcmNhcmFtIGEgc3VhIHZpZGE=","Q2l0ZSAzIG1vbWVudG9zIG1hcmF2aWxob3NvcyBkZW50cm8gZGEgZHA2","Q2l0ZSAzIG1vbWVudG9zIGltcG9ydGFudGVzIG5hIHN1YSB2aWRh","Q2l0ZSAzIGF0b3JlcyBkZSBmaWxtZXMgcG9ybm8gZ2F5","Q2l0ZSAzIGNhbnRvcmVzIHF1ZSBjb21lY2VtIGNvbSBhIGxldHJhIEY=","Q2l0ZSAzIHBlcmd1bnRhcyBxdWUgdm9jw6ogZ29zdGFyaWEgZGUgZmF6ZXIgYW8gT2JhbWE=","Q2l0ZSAzIHNvYnJlbWVzYXMgZmVpdGFzIGNvbSBzb3J2ZXRl","Q2l0ZSAzIGZvcm1hcyBwYXJhIGNoZWdhciBhbyBpbmZpbml0bw==","Q2l0ZSAzIGNob2NvbGF0ZXM=","Q2l0ZSAzIG3DunNpY2FzIGRvIGxlb25p","Q2l0ZSAzIHBlcnNvbmFnZW5zIGRlIHRpcXVpdGl0YXM=","Q2l0ZSAzIHJlZGVzIHNvY2lhaXM=","Q2l0ZSAzIG1hc3Nhcw==","Q2l0ZSAzIGVzdHVwaWRlenN6","Q2l0ZSAzIGZvY2Fz","Q2l0ZSAzIHRyb2NhZGlsaG9z","Q2l0ZSAzIHNhYm9yZXMgZGUgcGFzdGVs","Q2l0ZSAzIGNhbnRvcmVzIGRlIGxhbWJhZGE=","Q2l0ZSAzIG51bmVz","Q2l0ZSAzIG1hcmNhcyBkZSBjZXJ2ZWph","Q2l0ZSAzIHBlc3NvYXMgY29tIG5vbWUgcmVwZXRpZG8gbmEgZHA2","Q2l0ZSAzIGRyaW5rcw==","Q2l0ZSAzIGdhbWJpYXJyYXMgZG8ganM=","Q2l0ZSAzIHByb2Zpc3PDtWVzIHF1ZSB0ZXJtaW5hbSBjb20gImlzdGEi","Q2l0ZSAzIG3DunNpY2FzIHF1ZSB0ZW0gYSBwYWxhdnJhIGN1","Q2l0ZSAzIHBhw61zZXMgZGEgw4FmcmljYQ==","Q2l0ZSAzIGRlc2NlbmRlbnRlcyBkZSBqYXBvbsOqcyBkYSBkcDY=","Q2l0ZSAzIG9zc29zIGRvIGNvcnBvIGh1bWFubw==","Q2l0ZSAzIHRpcG9zIGRlIGZlbGlub3M=","Q2l0ZSAzIG9iamV0b3MgY29tIHRhbXBh","Q2l0ZSAzIGFww7NzdG9sb3M=","Q2l0ZSAzIMOzcmfDo29zIGRvIGNvcnBvIGh1bWFubw==","Q2l0ZSAzIGNvaXNhcyBxdWUgdm9jw6ogZW5jb250cmEgbm8gYmFuY28=","Q2l0ZSAzIGNvaXNhcyBxdWUgdm9jw6ogZmF6IG5hIHByYWlh","Q2l0ZSAzIGJhaXJyb3MgZGEgWkw=","Q2l0ZSAzIHPDqXJpZXMgZGUgVFY=","Q2l0ZSAzIGPDtG1vZG9zIGRlIHVtYSBjYXNh","Q2l0ZSAzIG9iamV0b3MgcXVlIHZvY8OqIGVuY29udHJhIG5vIGJhbmhlaXJv","Q2l0ZSAzIG1vZGVsb3MgZGUgY2Fycm8=","Q2l0ZSAzIGVzcGVjaWFsaWRhZGVzIG3DqWRpY2Fz","Q2l0ZSAzIGxlbmRhcyBkbyBmb2xjbG9yZSBicmFzaWxlaXJv","Q2l0ZSAzIHBlcnNvbmFnZW5zIGRvIGNoYXZl","Q2l0ZSAzIHRpcG9zIGRlIGFydGVzIG1hcmNpYWlz","Q2l0ZSAzIHRpcG9zIGRlIHNhcGF0b3M=","Q2l0ZSAzIGNvbWlkYXMgamFwb25lc2Fz","Q2l0ZSAzIHBlcnNvbmFnZW5zIGRlIGZpbG1lIGRlIHRlcnJvcg==","Q2l0ZSAzIG90w6FyaW8gSEFIQUhB","Q2l0ZSAzIGFuaW1haXMgY29tIGJpY28=","Q2l0ZSAzIHJvdXBhcyBmZWlhcw==","Q2l0ZSAzIHJhw6dhcyBkZSBjYWNob3Jybw==","Q2l0ZSAzIG1hcmNoaW5oYXMgZGUgY2FybmF2YWwgZGUgc8OjbyBsdWl6IGRvIHBhcmFpdGluZ2E=","Q2l0ZSAzIGRyb2dhcyBpbmdlcmlkYXMgcG9yIHZpYSBvcmFsIA==","Q2l0ZSAzIG7Dum1lcm9zIGRpdmlzb3JlcyBkZSAzNw==","Q2l0ZSAzIGRvZW7Dp2FzIHBzaXF1acOhdHJpY2FzIHRyYXRhZGFzIGNvbW8gaW5jdXLDoXZlaXM=","Q2l0ZSAzIGxpbmd1YWdlbnMgZGUgcHJvZ3JhbWHDp8OjbyA=","Q2l0ZSAzIGRvZW7Dp2FzIHZlbsOpcmVhcyBxdWUgdm9jw6ogasOhIGNvbnRyYWl1","Q2l0ZSAzIGxpZGVyZXMgbXVuZGlhaXMgZG9zIMO6bHRpbW9zIGRvaXMgc8OpY3Vsb3Mgc2VtIGxpZ2HDp8O1ZXMgY29tIHF1YWxxdWVyIHJlbGlnacOjbyA=","Q2l0ZSAzIHBhbGF2cmFzIGNvbSBtYWlzIGRlIDIwIGxldHJhcw==","Q2l0ZSAzIHBvc2nDp8O1ZXMgc2V4dWFpcyBuw6NvLWNyaXN0w6Nz","Q2l0ZSAzIGNhcmFjdGVyw61zdGljYXMgZG8gSm9uYXRoYW4=","Q2l0ZSAzIGxpdnJvcyBkbyBtZW5pbm8=","Q2l0ZSAzIGNhcnJvcyBkYSBCTVc=","Q2l0ZSAzIEFtYXJlbGluaG8sIEVzcXVpbsOjbyBlIFBvZHLDo28=","Q2l0ZSAzIGZpbG1lcyBzb2JyZSBKZXN1cyBDcmlzdG8gZSBzdWEgam9ybmFkYQ==","Q2l0ZSAzIFZpbHNvbiwgVGVuZW50cyBlIENlY8OtbGlh","Q2l0ZSAzIENhcGl0w6NvIFN1amVpcmEsIE9yw6FjaW8gZSBDaGljbyBCZW50bw==","Q2l0ZSAzIG1vdMOpaXMgcXVlIHZvY8OqIGrDoSBmb2k=","Q2l0ZSAzIHBlc3NvYXMgZGEgZHA2IHF1ZSB2b2PDqiBwZWdhcmlh","Q2l0ZSAzIGJ1bmRpbmhhcyBkZSBzdWNlc3NvLg==","Q2l0ZSAzIHBlw6dhcyBkZSByb3VwYSBwcmEgc2UgdXNhciBuYSBwcmFpYQ==","Q2l0ZSAzIGNhcmFjdGVyw61zdGljYXMgZG8gdGVuZW50ZSA=","Q2l0ZSAzIGNhcmFjdGVyw61zdGljYXMgZGEgQnJ1bmluaGE=","Q2l0ZSAzIHByZXNpZGVudGVzIGRvIEJyYXNpbA==","Q2l0ZSAzIHBlcnNvbmFnZW5zIGRlIERyYWdvbiBCYWxs","Q2l0ZSAzIGVzdGHDp8O1ZXMgZGUgbWV0csO0IGRlIFPDo28gUGF1bG8=","Q2l0ZSAzIHByb2dyYW1hcyBkZSB0ZWxldmlzw6NvIGFwcmVzZW50YWRvcyBwZWxvIFNpbHZpbyBTYW50b3M=","Q2l0ZSAzIHRyaWxvZ2lhcyBvbmRlIHPDsyBvIHByaW1laXJvIGZpbG1lIMOpIGJvbQ==","Q2l0ZSAzIA==","Q2l0ZSAzIHBlc3NvYXMgcXVlIHZvY8OqIGFtYQ==","Q2l0ZSAzIHBlc3NvYXMgZGEgRFA2IHF1ZSB0ZW0gdGVuZMOqbmNpYSBob21vc3NleHVhbA==","Q2l0ZSAzIGZyYXNlcyBkZSBzaGFrZXNwZWFyZQ==","Q2l0ZSAzIGZhbGFzIGRlIGZyaWVuZHM=","Q2l0ZSAzIGZhbGFzIGRvIHNpbHZpbyBzYW50b3M=","Q2l0ZSAzIHByw6lkaW9zIGZhbW9zb3MgZGUgc8OjbyBwYXVsbw==","Q2l0ZSAzIHJ1YXMgZGUgc8OjbyBwYXVsbw==","Q2l0ZSAzIG3DunNpY2FzIGRvIENoaXTDo296aW5obyBlIFhvcm9yw7M=","Q2l0ZSAzIG3DunNpY2FzIGRvIEZyZXNubw==","Q2l0ZSAzIGV4IEJCQnM=","Q2l0ZSAzIGFuaW1haXMgY29tIGFzYXM=","Q2l0ZSAzIGFuaW1haXMgcXVlIG5hZGFt","Q2l0ZSAzIGFuaW1haXM=","Q2l0ZSAzIHByYWlhcyBkbyBSaW8gZGUgSmFuZWlybw==","Q2l0ZSAzIG5vbWVzIGNvbSBC","Q2l0ZSAzIHBhbGF2cmFzIHF1ZSB0ZXJtaW5hbSBjb20gTA==","Q2l0ZSAzIG1hcmNhcyBkZSBjYXJybw==","Q2l0ZSAzIG1vdGl2b3MgcGFyYSBhIEJydW5pbmhhIG5hbW9yYXIgbyBGZXJuYW5kbyBQYXRpbmk=","Q2l0ZSAzIG1vdGl2b3MgcGFyYSBhIEJydW5pbmhhIG5hbW9yYXIgbyBQYXRpbmk=","Q2l0ZSAzIG1vdGl2b3MgcGFyYSBhIEJydW5pbmhhIG5hbW9yYXIgbyBQYXRpbmk=","Q2l0ZSAzIG1vdGl2b3MgcGFyYSBhIEJydW5pbmhhIG5hbW9yYXIgbyBQYXRpbmk=","Q2l0ZSAzIG1vdGl2b3MgcGFyYSBhIEJydW5pbmhhIG5hbW9yYXIgbyBQYXRpbmk=","Q2l0ZSAzIG1vdGl2b3MgcGFyYSBhIEJydW5pbmhhIG5hbW9yYXIgbyBQYXRpbmk=","Q2l0ZSAzIGRyb2dhcyBxdWUgdm9jw6ogdXNhcmlh","Q2l0ZSAzIE1hcmNpb3MgZGEgQWl2ZW8=","Q2l0ZSAzIGNvaXNhcyBxdWUgdm9jw6ogdGVtIG5vIHF1YXJ0bw==","Q2l0ZSAzIGFuaW1haXMgZGEgZmF6ZW5kYQ==","Q2l0ZSAzIHRpcG9zIGRlIHBhZWw=","Q2l0ZSAzIHRpcG9zIGRlIGluc2V0bw==","Q2l0ZSAzIGNyaW1lcw==","Q2l0ZSAzIGNyaW1lcyBxdWUgdm9jw6ogY29tZXRldQ==","Q2l0ZSAzIGNhc2FpcyBkYSBEUDY=","Q2l0ZSAzIGFtb3JlcyBkYSBzdWEgdmlkYQ==","Q2l0ZSAzIGNvaXNhcyBxdWUgYnJvdGFtIGRvIGNow6Nv","Q2l0ZSAzIHBhw61zZXMgZGEgb2NlYW5pYQ==","Q2l0ZSAzIHByb2R1dG9zIGRlcml2YWRvcyBkbyBsZWl0ZQ==","Q2l0ZSAzIHRpcG9zIGRlIGJlYmlkYXMg","Q2l0ZSAzIGNhcmFjdGVyaXN0aWNhcyBkbyBmb2xnYWRpbmhv","Q2l0ZSAzIGNhcmFjdHJpc3RpY2FzIGRvIG51bmVz","Q2l0ZSAzIGZvbnRlcyBkbyB3b3Jk","Q2l0ZSAzIGpvZ29zIGRlIHBsYXkgc3RhdGlvbiAx","Q2l0ZSAzIGpvZ29zIHF1ZSBwb2RlbSBzZXIgam9nYWRvcyBjb20gbyBiYXJhbGhv","Q2l0ZSAzIHBhcnRlcyBkYSBtw7pzaWNhIGZhcm9lc3RlIGNhYm9jbG8=","Q2l0ZSAzIG3DunNpY2FzIGRvIGxlZ2nDo28gdXJiYW5h","Q2l0ZSAzIHBlc3NvYXMgY29tIG9saG9zIGNsYXJvcw==","Q2l0ZSAzIGNhc2FpcyBkZSBtYWxoYcOnw6Nv","Q2l0ZSAzIHBlcnNvbmFnZW5zIGRlIFRoZSBCaWcgQmFuZyBUaGVvcnk=","Q2l0ZSAzIHRpcG9zIGRlIHNhcGF0bw==","Q2l0ZSAzIHBlY2Fkb3MgY2FwaXRhaXM=","Q2l0ZSAzIHBhcnRlcyBkbyBjb3Jwbw==","Q2l0ZSAzIGNvaXNhcyBxdWUgc2UgZmF6IGNvbSBhIGxpbmd1YQ==","Q2l0ZSAzIG7Dum1lcm9z","Q2l0ZSAzIGZhbW9zb3MgZG8gZnV0ZWJvbA==","Q2l0ZSAzIGZhbW9zb3MgZGEgbm92ZWxh","Q2l0ZSAzIHBhcnF1ZXMgZGUgc8OjbyBwYXVsbw==","Q2l0ZSAzIHBhcnF1ZXMgZGUgZGl2ZXJzw6Nv","Q2l0ZSAzIGVzcMOpY2llcyBkZSBjb2JyYQ==","Q2l0ZSAzIHBpYWRhcw==","Q2l0ZSAzIHV0ZW5zw61saW9zIGRlIGNvemluaGE=","Q2l0ZSAzIGZyYXNlcyBkZSBtw6FnaWNv","Q2l0ZSAzIHJhw6dhcyBkZSBjYWNob3Jybw==","Q2l0ZSAzIGZyYXNlcyBkaXRhcyBhbnRlcyBkZSBtb3JyZXI=","Q2l0ZSAzIGJpc2NvaXRvIG91IGJvbGFjaGE\/","Q2l0ZSAzIGJveWJhbmRz","Q2l0ZSAzIGNhcGl0YWlzIGJyYXNpbGVpcmFz","Q2l0ZSAzIG1vdGl2b3MgcG9yIHF1ZSBvIEpob25ueSDDqSBvIE1lbmlubyBtaW1pbWk=","Q2l0ZSAzIGJhY2t1cHMgZG8gSmhvbm55","Q2l0ZSAzIHPDqXJpZXMgZGUgU3VwZXIgU2VudGFp","Q2l0ZSAzIHBlcnNvbmFnZW5zIGRlIEdhbWUgb2YgVGhyb25lcw==","Q2l0ZSAzIHNkc2RzZA==","Q2l0ZSAzIGVzdGlsb3MgZGUgZGFuw6dhIGRlIHNhbMOjbw==","Q2l0ZSAzIGFsaW1lbnRvcyBmZWl0b3MgY29tIG1pbGhv","Q2l0ZSAzIGJsYWJhbGJhbGE=","Q2l0ZSAzIHRlc3Rl","Q2l0ZSAzIGNvcmVzIGRvIGFyY28tw61yaXM=","Q2l0ZSAzIA==","Q2l0ZSAzIHJlc3RhdXJhbnRlcyBkYSBjYWl4YSBkZSBhbG1vw6dv","Q2l0ZSAzIGZpbMOzc29mb3M=","Q2l0ZSAzIG1vZWRhcyBlc3RyYW5nZWlyYXM=","Q2l0ZSAzIHZvZ2Fpcw==","Q2l0ZSAzIGZlcmlhZG9zIG5hY2lvbmFpcw==","Q2l0ZSAzIGNhbsOnw7VlcyBkb3MgQmVhdGxlcw==","Q2l0ZSAzIGNvaXNhcyBxdWUgdm9jw6ogZmFyaWEgcG9yIGFtb3Iu","Q2l0ZSAzIG1hbmVpcmFzIGRlIHRyb2xsYXIgbyBKb2hubnk=","Q2l0ZSAzIHNpc3RlbWFzIG9wZXJhY2lvbmFpcw==","Q2l0ZSAzIHBlcnNvbmFnZW5zIGRvIGZvbGNsb3JlIGJyYXNpbGVpcm8=","Q2l0ZSAzIGx1dGFkb3JlcyBkbyBVRkM=","Q2l0ZSAzIGNpZGFkZXMgZG8gbm9yZGVzdGU=","Q2l0ZSAzIGluZ3JlZGllbnRlcyBkZSB1bSBib2xv","Q2l0ZSAzIGxpdnJvcyBkYSBzYWdhIEhhcnJ5IFBvdHRlcg=="], 
	perguntas = todasPerguntas, 
	sortear = function () {
		var ret = utf8_decode(atob(perguntas.splice(Math.random() * perguntas.length, 1)));
		document.getElementById("pergunta").innerHTML = ret;
	}, 
	timer = function() {
		var time = document.getElementById('timer-img'),
			play = document.getElementById('vai'), 
			newp = document.getElementById('perguntar');
			play_inactive = document.getElementById('indo'), 
			newp_inactive = document.getElementById('perguntou');
		play.style.display = "none";
		newp.style.display = "none";
		play_inactive.style.display = "block";
		newp_inactive.style.display = "block";
		time.className = "animated";
		setTimeout(function(){
			play.style.display = "block";
			newp.style.display = "block";
			play_inactive.style.display = "none";
			newp_inactive.style.display = "none";
			time.className = "";
			addEvent();
		}, 10000);
	}, 
	addEvent =  function () {
		document.getElementById('vai').addEventListener('mousedown', timer);
		document.getElementById('perguntar').addEventListener('mousedown', sortear);
	};
sortear(perguntas);
addEvent();
function utf8_decode(str_data) {
  //  discuss at: http://phpjs.org/functions/utf8_decode/
  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
  //    input by: Aman Gupta
  //    input by: Brett Zamir (http://brett-zamir.me)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Norman "zEh" Fuchs
  // bugfixed by: hitwork
  // bugfixed by: Onno Marsman
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: kirilloid
  // bugfixed by: w35l3y (http://www.wesley.eti.br)
  //   example 1: utf8_decode('Kevin van Zonneveld');
  //   returns 1: 'Kevin van Zonneveld'

  var tmp_arr = [],
    i = 0,
    c1 = 0,
    seqlen = 0;

  str_data += '';

  while (i < str_data.length) {
    c1 = str_data.charCodeAt(i) & 0xFF;
    seqlen = 0;

    // http://en.wikipedia.org/wiki/UTF-8#Codepage_layout
    if (c1 <= 0xBF) {
      c1 = (c1 & 0x7F);
      seqlen = 1;
    } else if (c1 <= 0xDF) {
      c1 = (c1 & 0x1F);
      seqlen = 2;
    } else if (c1 <= 0xEF) {
      c1 = (c1 & 0x0F);
      seqlen = 3;
    } else {
      c1 = (c1 & 0x07);
      seqlen = 4;
    }

    for (var ai = 1; ai < seqlen; ++ai) {
      c1 = ((c1 << 0x06) | (str_data.charCodeAt(ai + i) & 0x3F));
    }

    if (seqlen == 4) {
      c1 -= 0x10000;
      tmp_arr.push(String.fromCharCode(0xD800 | ((c1 >> 10) & 0x3FF)), String.fromCharCode(0xDC00 | (c1 & 0x3FF)));
    } else {
      tmp_arr.push(String.fromCharCode(c1));
    }

    i += seqlen;
  }

  return tmp_arr.join("");
}
