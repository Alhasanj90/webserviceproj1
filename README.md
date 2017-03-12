# Football Player List
A simple REST API project that list players information by using http to list, add,
update and delete data.

## NPM that need to be install to run the project
-npm init
-install express --save
-npm install body-parser --save
-npm install mongodb --save

# mlab
we used mlab as cloud service that host the data.
![mlab1](https://cloud.githubusercontent.com/assets/17804084/23836869/f9544754-0776-11e7-8f36-ad6a8604fc7d.png)

The above image shows the collection that been created which called players.

![mlab2](https://cloud.githubusercontent.com/assets/17804084/23837039/9192d092-0779-11e7-986f-0d0297213e2e.png)

As we can see the list of players that been created in mlab to see if we can list, add, update and delete them through 
http.

# Runing the local server
navigate to the folder and we use node and the file that we want to run (app.js).
![running serv](https://cloud.githubusercontent.com/assets/17804084/23837072/297c5f40-077a-11e7-9b06-4cc391916c9e.png)



# Advanced REST client

we use Advanced REST client to test if we can list,add, update and delete the data or not

## List All
navigating to the file to list all what we have in our database.
in this example we use http://localhost:8000/api/players
![list1](https://cloud.githubusercontent.com/assets/17804084/23837112/15aa13ee-077b-11e7-8ef3-2938b38d8abc.png)
![list2](https://cloud.githubusercontent.com/assets/17804084/23837113/18ed7dfc-077b-11e7-8775-dfd8f3c61552.png)

## Add A player
Using application/json to add to the list.
![add1](https://cloud.githubusercontent.com/assets/17804084/23837189/34629490-077c-11e7-9775-289c03f53126.png)
![add2](https://cloud.githubusercontent.com/assets/17804084/23837190/35a5264c-077c-11e7-9a9a-5be10b12eace.png)

## Update a player
we have to use the id as we can see below to update.
![update1](https://cloud.githubusercontent.com/assets/17804084/23837224/ce189422-077c-11e7-8b35-a2035116616b.png)
![update2](https://cloud.githubusercontent.com/assets/17804084/23837225/cf4a0d4e-077c-11e7-9f3c-7e26b0d950bb.png)

## Delete a player from the list
Also to dekete we have to use the id.
![delete1](https://cloud.githubusercontent.com/assets/17804084/23837265/57860488-077d-11e7-8d84-f759e3922b32.png)
![delete2](https://cloud.githubusercontent.com/assets/17804084/23837266/5937c7a8-077d-11e7-857e-e81d0b10a436.png)

# Check mlab
![screen shot 2017-03-12 at 23 41 50](https://cloud.githubusercontent.com/assets/17804084/23837282/a3530136-077d-11e7-97b9-92d146806cff.png)

As we can see above Gareth Bale is been listed and updated as well as Roony has been deleted from the list.


# Author: Alhasan Alhefdhi
