const samplePrompts = [
	'sql injection',
	'bobby tables',
	'standards',
	'regular expressions',
	'sudo',
	'compiling',
	'machine learning',
	'git',
	'encryption',
	'tech support',
	'password strength',
	'automation',
	'internet arguments',
	'debugging',
	'security',
	'cloud computing',
	'captcha',
	'time zones',
	'command line',
  'someone is wrong on the internet',
  'make me a sandwich'
];

export const load = () => {
	const samplePrompt = samplePrompts[Math.floor(Math.random() * samplePrompts.length)];

	return { samplePrompt };
};
