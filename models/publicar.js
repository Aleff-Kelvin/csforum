'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Publicar = sequelize.define('Publicar',{
		id: {
			field: 'id_post',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		titulo: {
			field: 'titulo_post',
			type: DataTypes.STRING,
			allowNull: false
		},
		descricao: {
			field: 'descricao_post',
			type: DataTypes.STRING,
			allowNull: false
		},
		// data: {
		// 	field: 'data_post',
		// 	type: DataTypes.DATE,
		// 	allowNull: false
		// },
		imagem: {
			field: 'imagem_post',
			type: DataTypes.STRING,
			allowNull: false
		},
		categoria: {
			field: 'categoria_post',
			type: DataTypes.STRING,
			allowNull: false
		},
		conteudo: {
			field: 'conteudo_post',
			type: DataTypes.STRING,
		}
	}, 
	{
		tableName: 'tb_post', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Publicar;
};
