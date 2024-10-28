from . import db
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from flask import make_response, jsonify

class Message(db.Model, SerializerMixin):
    __tablename__='messages'
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(50), nullable=False)
    email=db.Column(db.String(254), nullable=False)
    message=db.Column(db.Text, nullable=False)

    @validates('email')
    def validate_email(self, key, email):
        if not email:
            raise ValueError('Email cannot be empty')
        if '@' not in email:
            raise ValueError('Wrong format for an email')
        return email

    @classmethod
    def add_message(cls, name, email, message):
        new_message=cls(
            name=name,
            email=email,
            message=message
        )
        db.session.add(new_message)
        db.session.commit()

        response=make_response(jsonify(new_message.to_dict()), 201)
        return response

