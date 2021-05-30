'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id_usuario: {
			field: 'id_usuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome_usuario: {
			field: 'nome_usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		email_usuario: {
			field: 'email_usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha_usuario: {
			field: 'senha_usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		fk_admin: {
			field: 'fk_admin',
			type: DataTypes.INTEGER,
			references: {
				model: 'tb_usuario',
				key: 'id_usuario'
			}
		},
	}, 
	{
		tableName: 'tb_usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
