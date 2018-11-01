import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default
{
	entry: 'dist/index.js',
	dest: 'dist/bundles/module-test.umd.js',
	sourceMap: false,
	format: 'umd',
	moduleName: 'module-test',
	globals: {
		'@angular/core': 'ng.core',
		'rxjs': 'rxjs',
	},
    plugins: [
        peerDepsExternal(),
    ]
}