'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id: {
			field: 'id_usuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nome_usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		login_backend: {
			field: 'login_usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email_usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha_usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		fk_admin: {
			field: 'fk_admin',
			type: DataTypes.INTEGER,
			references: {
				model: 'usuario',
				key: 'id_usuario'
			}
		}
	}, 
	{
		tableName: 'usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
