include_recipe 'apt'

apt_repository 'docker-ce' do
  uri 'https://download.docker.com/linux/ubuntu'
  components ['stable']
  key 'https://download.docker.com/linux/ubuntu/gpg'
end

apt_update 'update' do
  action :update
end

apt_package 'docker-ce' do
  action :install
end
