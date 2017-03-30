# include_recipe 'apt'

# apt_repository 'docker-ce' do
#  uri 'https://download.docker.com/linux/ubuntu'
#  components ['stable']
#  key 'https://download.docker.com/linux/ubuntu/gpg'
# end

# apt_update 'update' do
#  action :update
# end

# apt_package 'docker-ce' do
#  action :install
#end

bash 'install docker' do
  code <<-EOH
    sudo apt-get -y install apt-transport-https ca-certificates curl
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    sudo apt-get update
    sudo apt-get -y install docker-ce
    sudo gpasswd -a ${USER} docker
  EOH
end
