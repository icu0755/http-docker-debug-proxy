FROM node:0.12
ADD script.js /script.js
EXPOSE 8000
CMD ["node", "/script.js"]
