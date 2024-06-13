import Joi from 'joi';

// Define validation for adding/updating a contact
const contactValidation = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().required(),
	phone: Joi.string().required(),
});

// Define validation for updating favorite field
const favoriteValidation = Joi.object({
	favorite: Joi.bool().required(),
});

const signupValidation = Joi.object({
	email: Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
		.required()
		.messages({
			'any.required': 'Missing required email field',
			'string.email': 'Invalid email format',
		}),
	password: Joi.string().min(6).max(16).required().messages({
		'any.required': 'Missing required password field',
		'string.min': 'Password must be atlesast {#limit} characters long',
		'string.max': 'Password cannot be longer than {#limit} characters',
	}),
});

const subscriptionValidation = Joi.object({
	subscription: Joi.string().valid('starter', 'pro', 'business'),
});

export {
	contactValidation,
	favoriteValidation,
	signupValidation,
	subscriptionValidation,
};
